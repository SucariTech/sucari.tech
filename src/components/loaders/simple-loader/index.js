import React from 'react';

/* Styles */
import * as SC from './styles';

const SimpleLoader = ({ numberOfRectangles = 6 }) => {
  return (
    <SC.Container>
      {
        Array(numberOfRectangles).fill(null).map((_, index) => (
          <SC.Rectangle
            key={ index }
            order={ index + 1 }
            numberOfRectangles={ numberOfRectangles }
          />
        ))
      }
    </SC.Container>
  );
}

export default SimpleLoader;