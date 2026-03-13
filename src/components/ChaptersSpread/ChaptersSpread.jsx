import styles from './ChaptersSpread.module.css'

/**
 * ChaptersSpread Component
 * Displays table of contents with chapter listings
 * 
 * Props:
 *   - chapters: array of {title, pageNumber} objects
 *   - bookTitle: string
 */
function ChaptersSpread({ chapters, bookTitle }) {
  return (
    <div className={styles.spread} role="region" aria-label="Table of contents">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Contents</h1>
          <p className={styles.bookTitle}>{bookTitle}</p>
        </div>

        {/* Chapters List */}
        <nav className={styles.chaptersContainer} aria-label="Chapter list">
          {chapters && chapters.length > 0 ? (
            <ul className={styles.chaptersList}>
              {chapters.map((chapter, idx) => (
                <li key={idx} className={styles.chapterItem}>
                  <span className={styles.chapterTitle}>{chapter.title}</span>
                  <span className={styles.chapterDots}></span>
                  <span className={styles.pageNumber}>{chapter.pageNumber}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.emptyState}>No chapters available.</p>
          )}
        </nav>

        {/* Footer */}
        <div className={styles.footer}>
          <p className={styles.footerText}>
            Flip through these pages to discover the stories that define this artist's legacy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChaptersSpread
