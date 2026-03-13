import { useEffect, useRef } from 'react'
import styles from './ContentSpread.module.css'

/**
 * ContentSpread Component
 * Displays a song spread with image/caption (left) and Spotify embed + reflection (right)
 * 
 * Props:
 *   - song: { title, artist, spotifyTrackId, reflection, imageUrl }
 *   - isActive: boolean - whether this page is currently visible
 *   - onSpotifyLoad: callback when Spotify embed loads
 */
function ContentSpread({ song, isActive, onSpotifyLoad }) {
  const spotifyFrameRef = useRef(null)

  // Notify parent when this spread becomes active/inactive
  useEffect(() => {
    if (isActive && onSpotifyLoad) {
      onSpotifyLoad(song.spotifyTrackId, spotifyFrameRef.current)
    }
  }, [isActive, song.spotifyTrackId, onSpotifyLoad])

  return (
    <article className={styles.spread} role="region" aria-label={`${song.title} by ${song.artist}`}>
      {/* LEFT SIDE: Image and caption */}
      <div className={styles.leftPanel}>
        <div className={styles.imageContainer}>
          {song.imageUrl ? (
            <img
              src={song.imageUrl}
              alt={`Album cover for ${song.title}`}
              className={styles.image}
            />
          ) : (
            <div className={styles.imagePlaceholder}>
              <p>{song.artist}</p>
            </div>
          )}
        </div>
        <div className={styles.caption}>
          <h2 className={styles.songTitle}>{song.title}</h2>
          <p className={styles.artist}>by {song.artist}</p>
        </div>
      </div>

      {/* RIGHT SIDE: Spotify embed and reflection */}
      <div className={styles.rightPanel}>
        {/* Spotify Player Embed */}
        <div className={styles.spotifyContainer}>
          <iframe
            ref={spotifyFrameRef}
            src={`https://open.spotify.com/embed/track/${song.spotifyTrackId}?utm_source=generator`}
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className={styles.spotifyEmbed}
            title={`Spotify player for ${song.title}`}
          />
        </div>

        {/* Reflection text */}
        <div className={styles.reflectionContainer}>
          <p className={styles.reflectionText}>{song.reflection || 'No reflection provided.'}</p>
        </div>
      </div>
    </article>
  )
}

export default ContentSpread
