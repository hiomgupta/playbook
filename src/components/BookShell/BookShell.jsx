import { useState, useCallback } from 'react'
import CoverView from '../CoverView/CoverView'
import styles from './BookShell.module.css'

function BookShell() {
  // Shared state
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [audioUnlocked, setAudioUnlocked] = useState(false)

  // Callbacks for child components
  const handleOpen = useCallback(() => {
    setIsOpen(true)
    setAudioUnlocked(true) // First interaction = unlock audio
  }, [])

  return (
    <div className={styles.container}>
      {!isOpen && <CoverView onOpen={handleOpen} />}
      {isOpen && (
        <div className={styles.bookArea}>
          {/* BookView will be mounted here after Day 2 */}
          <div className={styles.placeholder}>
            Page flip engine coming Day 2...
          </div>
        </div>
      )}
    </div>
  )
}

export default BookShell
