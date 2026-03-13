import styles from './DummyPage.module.css'

function DummyPage({ pageNumber, title }) {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title || `Page ${pageNumber}`}</h1>
        <p className={styles.text}>This is a placeholder page.</p>
        <p className={styles.text}>Page number: {pageNumber}</p>
      </div>
    </div>
  )
}

export default DummyPage
