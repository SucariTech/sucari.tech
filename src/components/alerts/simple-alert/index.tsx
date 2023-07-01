import React from 'react'

/* Styles */
import * as SC from './styles'

export interface SimpleAlertProps extends React.PropsWithChildren {
  callback: React.MouseEventHandler
  visible: boolean
}

const SimpleAlert: React.FC<SimpleAlertProps> = ({
  callback,
  children,
  visible
}) => {
  const barrierRef = React.useRef<null | HTMLDivElement>(null)

  React.useEffect(() => {
    if (visible) {
      barrierRef.current?.focus()
    }
  }, [visible])

  if (!visible) return null

  return (
    <SC.Container>
      <SC.Barrier
        ref={ barrierRef }
        tabIndex={ 0 }
      />
      <SC.Modal>
        { children }
        <SC.OptionContainer>
          <SC.Option onClick={ callback }>OK</SC.Option>
        </SC.OptionContainer>
      </SC.Modal>
    </SC.Container>
  )
}

export default SimpleAlert
