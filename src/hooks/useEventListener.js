import { useEffect } from 'react'

export default function useEventListener(event, handler, element = global) {
  useEffect(() => {
    element.addEventListener(event, handler)

    return () => element.removeEventListener(event, handler)
  }, [event, handler, element])
}
