import { useCallback } from 'react'
import styles from './CoverView.module.css'

function CoverView({ onOpen }) {
  const handleClick = useCallback(() => {
    onOpen?.()
  }, [onOpen])

  return (
    <div className={styles.container}>
      {/* SVG filter for linen texture */}
      <svg width="0" height="0">
        <defs>
          <filter id="linenTexture">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
        </defs>
      </svg>

      {/* Book Cover */}
      <div className={styles.bookCover} onClick={handleClick} role="button" tabIndex={0}>
        {/* Cover with linen texture */}
        <div className={styles.coverFace}>
          {/* Book spine (left edge) */}
          <div className={styles.spine}></div>

          {/* Main cover area */}
          <div className={styles.coverMain}>
            {/* Artist label / polaroid-style */}
            <div className={styles.polaroid}>
              <div className={styles.polaroidPhoto}>
                {/* This will be replaced with actual image in future */}
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='100'%3E%3Crect fill='%23999' width='120' height='100'/%3E%3Ctext x='50%' y='50%' font-family='Caveat' font-size='14' fill='white' text-anchor='middle' dominant-baseline='middle'%3EArtist Photo%3C/text%3E%3C/svg%3E"
                  alt="Polaroid photo placeholder"
                  className={styles.photoImg}
                />
              </div>
              <div className={styles.polaroidLabel}>
                <div className={styles.artistName}>Eminem</div>
                <div className={styles.byline}>A Fan's Story</div>
              </div>
            </div>

            {/* Subtle cue to open */}
            <div className={styles.cue}>Click to open</div>
          </div>
        </div>

        {/* Three-dimensional shadow under book */}
        <div className={styles.shadow}></div>
      </div>
    </div>
  )
}

export default CoverView
