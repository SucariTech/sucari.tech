import React from 'react'

export type UseEventHandlerFunction = (...args: Array<any>) => any

const useEventHandler = <T extends UseEventHandlerFunction>(handler: T): T => {
  const handlerRef = React.useRef<T | null>(null)

  React.useLayoutEffect(() => {
    handlerRef.current = handler
  }, []) /* eslint-disable-line react-hooks/exhaustive-deps */

  return React.useCallback(
    (...args: Array<any>) => handlerRef.current?.(...args),
    [],
  ) as T
}

export default useEventHandler
