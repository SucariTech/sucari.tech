import React from 'react';

/* Gatsby Plugin Image */
import { getImage } from 'gatsby-plugin-image';

/* Hooks */
import { useContent } from '@contexts';

/* Layout Hooks */
import { useMenu } from '@layouts/main-layout';

/* Styles */
import * as SC from './styles';

const Cycle = () => {
  const {
    months,
    sections: { cycle }
  } = useContent();
  const { scrollToSection } = useMenu();
  const dateRef = React.useRef(new Date());
  return (
    <SC.Section data-section-name="cycle">
      <SC.Title data-effect="fade-in">
        { cycle.title }
      </SC.Title>
      <SC.Content>
        <SC.Left>
          <SC.PhaseList data-effect="fade-in">
            {
              cycle.phases.map((phase, index) => (
                <SC.Phase
                  key={ phase.name }
                  partIndex={ index }
                  numberOfParts={ cycle.phases.length }
                >
                  <SC.PhaseImage
                    image={ getImage(phase.image) }
                    alt={ phase.name }
                  />
                  <SC.PhaseName>{ phase.name }</SC.PhaseName>
                </SC.Phase>
              ))
            }
          </SC.PhaseList>
        </SC.Left>
        <SC.Right>
          <SC.RightList>
            <SC.RightItem data-effect="fade-in">{ months[dateRef.current.getMonth()] } { dateRef.current.getDate() }</SC.RightItem>
            <SC.RightItem data-effect="fade-in">{ cycle.aside.label }</SC.RightItem>
            <SC.RightItem data-effect="fade-in">{ cycle.aside.message }</SC.RightItem>
            <SC.RightItem
              data-effect="fade-in"
              onClick={ () => scrollToSection(cycle.aside.link.to) }
            >
              { cycle.aside.link.label }
            </SC.RightItem>
          </SC.RightList>
        </SC.Right>
      </SC.Content>
    </SC.Section>
  );
}

export default Cycle;