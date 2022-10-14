import React from 'react';

/* Styles */
import * as SC from './styles';

const SimpleAlert = ({
  visible,
  callback,
  children
}) => {
  const barrierRef = React.useRef(null);

  React.useEffect(() => {
    if(visible){
      barrierRef.current?.focus();
    }
  }, [ visible ]);

  return (
    visible ? (
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
    ) : null
  );
}

export default SimpleAlert;