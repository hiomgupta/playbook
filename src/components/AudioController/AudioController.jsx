import { useRef, useCallback, useEffect } from 'react'

function AudioController({ onPageFlip, audioUnlocked }) {
  const audioRef = useRef(null)

  // Initialize audio element on mount
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/audio/page-turn.wav')
      audioRef.current.preload = 'auto'
      audioRef.current.volume = 0.7
    }
  }, [])

  // Play page-turn sound
  const playPageSound = useCallback(() => {
    if (!audioRef.current) return

    // Reset to start and play (allows rapid retriggering)
    audioRef.current.currentTime = 0
    audioRef.current
      .play()
      .catch(err => {
        console.warn('Failed to play page-turn sound:', err)
      })
  }, [])

  // Listen to page flip events and play sound
  useEffect(() => {
    if (onPageFlip && audioUnlocked) {
      playPageSound()
    }
  }, [onPageFlip, audioUnlocked, playPageSound])

  // Headless component - renders nothing
  return null
}

export default AudioController
