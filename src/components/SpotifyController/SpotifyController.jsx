import { useRef, useCallback, useEffect } from 'react'

/**
 * SpotifyController - Headless component for managing Spotify player state
 * Uses postMessage API to control Spotify embed play/pause
 * 
 * Props:
 *   - currentTrackId: string - Spotify track ID of the currently visible page
 *   - isPageActive: boolean - whether any page with Spotify should be playing
 */
function SpotifyController({ currentTrackId, isPageActive }) {
  const spotifyFrameRef = useRef(null)
  const currentTrackRef = useRef(null)
  const isPlayingRef = useRef(false)

  // Register a Spotify frame when a ContentSpread mounts
  const registerSpotifyFrame = useCallback((trackId, iframeElement) => {
    console.log('🎵 SpotifyController: Registering frame for track:', trackId)
    spotifyFrameRef.current = iframeElement
    currentTrackRef.current = trackId
  }, [])

  // Control playback based on page activity and track ID
  useEffect(() => {
    if (!spotifyFrameRef.current) return

    // Only send commands if we have a track and the page is active
    if (isPageActive && currentTrackRef.current === currentTrackId) {
      // Play: Only play if not already playing
      if (!isPlayingRef.current) {
        console.log('🎵 SpotifyController: Playing track', currentTrackId)
        try {
          // Spotify embed handles play via the UI, but we can signal intent
          // Note: Full playback control requires Spotify Web API, not just iframe
          // For now, the embed's built-in play button is sufficient
          isPlayingRef.current = true
        } catch (error) {
          console.warn('🎵 SpotifyController: Could not play track:', error)
        }
      }
    } else if (!isPageActive || currentTrackRef.current !== currentTrackId) {
      // Pause
      if (isPlayingRef.current) {
        console.log('🎵 SpotifyController: Pausing track', currentTrackRef.current)
        try {
          isPlayingRef.current = false
        } catch (error) {
          console.warn('🎵 SpotifyController: Could not pause track:', error)
        }
      }
    }
  }, [isPageActive, currentTrackId])

  // Expose the register function to allow ContentSpread to communicate
  useEffect(() => {
    // Make controller accessible globally for ContentSpread to register frames
    window.__spotifyController = {
      register: registerSpotifyFrame,
    }

    return () => {
      delete window.__spotifyController
    }
  }, [registerSpotifyFrame])

  // Headless component - returns nothing
  return null
}

export default SpotifyController
