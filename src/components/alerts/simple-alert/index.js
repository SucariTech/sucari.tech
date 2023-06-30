import React from 'react'
import PropTypes from 'prop-types'

/* Styles */
import * as SC from './styles'

const SimpleAlert = ({
  callback,
  children,
  visible
}) => {
  const barrierRef = React.useRef(null)

  React.useEffect(() => {
    if (visible) {
      barrierRef.current?.focus()
    }
  }, [visible])

  return (
    visible
      ? (
        <SC.Container>
          <SC.Barrier
            ref={ barrierRef }
            tabIndex="0"
          />
          <SC.Modal>
            { children }
            <SC.OptionContainer>
              <SC.Option onClick={ callback }>OK</SC.Option>
            </SC.OptionContainer>
          </SC.Modal>
        </SC.Container>
      )
      : null
  )
}

SimpleAlert.propTypes = {
  callback: PropTypes.func,
  children: PropTypes.node,
  visible: PropTypes.bool
}

export default SimpleAlert
