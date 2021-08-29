import { useEffect, useState } from 'react'

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('propstate', onLocationChange)

    return () => {
      window.removeEventListener('propstate', onLocationChange)
    }
  }, [])

  return (
      currentPath === path ? children : null
  )
}

export default Route
