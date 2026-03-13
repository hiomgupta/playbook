import { useState, useCallback } from 'react'
import CoverView from '../CoverView/CoverView'
import BookView from '../BookView/BookView'
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

  const handlePageFlip = useCallback(pageNumber => {
    setCurrentPage(pageNumber)
  }, [])

  return (
    <div className={styles.container}>
      {!isOpen && <CoverView onOpen={handleOpen} />}
      {isOpen && (
        <BookView audioUnlocked={audioUnlocked} onPageFlip={handlePageFlip} />
      )}
    </div>
  )
}

export default BookShell
