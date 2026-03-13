import { useState, useRef, useCallback, useEffect } from 'react'
import { PageFlip } from 'page-flip'
import AboutSpread from '../AboutSpread/AboutSpread'
import ChaptersSpread from '../ChaptersSpread/ChaptersSpread'
import ContentSpread from '../ContentSpread/ContentSpread'
import SpotifyController from '../SpotifyController/SpotifyController'
import AudioController from '../AudioController/AudioController'
import { bookMeta, aboutPage, chapters, contentPages } from '../../content/book.config'
import styles from './BookView.module.css'

function BookView({ audioUnlocked, onPageFlip }) {
  const bookContainerRef = useRef(null)
  const pageFlipRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [currentPageFlip, setCurrentPageFlip] = useState(null)
  const [currentTrackId, setCurrentTrackId] = useState(null)

  // Calculate responsive scale for book
  useEffect(() => {
    const calculateScale = () => {
      const maxWidth = window.innerWidth * 0.9
      const maxHeight = window.innerHeight * 0.9

      const scaleW = maxWidth / 900
      const scaleH = maxHeight / 600

      setScale(Math.min(scaleW, scaleH, 1))
    }

    calculateScale()
    window.addEventListener('resize', calculateScale)
    return () => window.removeEventListener('resize', calculateScale)
  }, [])

  // Initialize PageFlip library
  useEffect(() => {
    if (!bookContainerRef.current || pageFlipRef.current) return

    try {
      const pageFlip = new PageFlip(bookContainerRef.current, {
        width: 450,
        height: 600,
        size: 'fixed',
        minWidth: 400,
        maxWidth: 500,
        minHeight: 500,
        maxHeight: 700,
        maxShadowOpacity: 0.5,
        showCover: false,
        flipping: true,
        disableFlip: false,
        autoSize: false,
      })

      pageFlipRef.current = pageFlip

      // Handle page flip events
      const handleFlip = event => {
        const pageNumber = event.data
        setCurrentPageFlip(pageNumber)
        
        // Calculate which song track is on this page
        // Pages 0: About
        // Page 1: Chapters
        // Pages 2+: Song spreads
        const songIndex = pageNumber - 2
        if (songIndex >= 0 && songIndex < contentPages.length) {
          setCurrentTrackId(contentPages[songIndex].spotifyTrackId)
          console.log(`🎵 BookView: Page ${pageNumber} → Track: ${contentPages[songIndex].title}`)
        } else {
          setCurrentTrackId(null)
        }
        
        onPageFlip?.(pageNumber)
      }

      // Attach event listener using the `on()` method
      if (typeof pageFlip.on === 'function') {
        pageFlip.on('flip', handleFlip)
      }

      // Load pages from HTML children
      const pagesToLoad = bookContainerRef.current.querySelectorAll('.book-page')
      pageFlip.loadFromHTML(pagesToLoad)

      return () => {
        // Cleanup if needed
      }
    } catch (error) {
      console.error('Failed to initialize PageFlip:', error)
    }
  }, [onPageFlip])

  return (
    <div className={styles.container}>
      <div
        className={styles.bookScaler}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        <div
          ref={bookContainerRef}
          className={styles.bookWrapper}
          data-density="hard"
        >
          {/* About page */}
          <div className="book-page">
            <AboutSpread 
              artistName={aboutPage.artistName}
              portraitUrl={aboutPage.portraitUrl}
              statement={aboutPage.personalStatement}
            />
          </div>

          {/* Chapters page */}
          <div className="book-page">
            <ChaptersSpread 
              chapters={chapters}
              bookTitle={bookMeta.title}
            />
          </div>

          {/* Song spreads - one page per song */}
          {contentPages.map((song, index) => (
            <div key={`song-${index}`} className="book-page">
              <ContentSpread 
                song={song} 
                isActive={currentPageFlip === index + 2}
                onSpotifyLoad={(trackId, iframeRef) => {
                  console.log('📄 ContentSpread: Registering Spotify frame for', trackId)
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Spotify controller (headless) */}
      <SpotifyController 
        currentTrackId={currentTrackId} 
        isPageActive={currentPageFlip !== null}
      />

      {/* Audio controller (headless) */}
      <AudioController onPageFlip={currentPageFlip} audioUnlocked={audioUnlocked} />
    </div>
  )
}

export default BookView
