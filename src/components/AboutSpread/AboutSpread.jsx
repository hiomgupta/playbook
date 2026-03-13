import styles from './AboutSpread.module.css'

/**
 * AboutSpread Component
 * Displays artist bio with portrait and personal statement
 * 
 * Props:
 *   - artistName: string
 *   - portraitUrl: string - URL to artist portrait image
 *   - statement: string - Personal statement/bio text
 */
function AboutSpread({ artistName, portraitUrl, statement }) {
  return (
    <div className={styles.spread} role="region" aria-label="About the artist">
      {/* Left side: Portrait */}
      <div className={styles.leftPanel}>
        <div className={styles.portraitContainer}>
          {portraitUrl ? (
            <img
              src={portraitUrl}
              alt={`${artistName} artist portrait`}
              className={styles.portrait}
            />
          ) : (
            <div className={styles.portraitPlaceholder}>
              <p>{artistName}</p>
            </div>
          )}
        </div>
      </div>

      {/* Right side: Bio/Statement */}
      <div className={styles.rightPanel}>
        <div className={styles.header}>
          <h1 className={styles.artistName}>{artistName}</h1>
          <p className={styles.subtitle}>A Fan's Perspective</p>
        </div>

        <div className={styles.statementContainer}>
          <p className={styles.statement}>{statement}</p>
        </div>

        <div className={styles.footer}>
          <p className={styles.attribution}>
            Curated with passion and respect for the artist and their craft.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSpread
