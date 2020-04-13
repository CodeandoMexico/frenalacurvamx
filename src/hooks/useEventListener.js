import { useEffect } from 'react'

export default function useEventListener(element, event, handler) {

    useEffect(
        () => {
            element.addEventListener(event, handler)

            return () => element.removeEventListener(event, handler)
        },
        [event, handler, element]
    )

}
