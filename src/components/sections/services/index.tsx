import React from 'react'

/* Gatsby Plugin Image */
import {
  IGatsbyImageData,
  getImage
} from 'gatsby-plugin-image'

/* Hooks */
import { useContent } from '@contexts'

/* Styles */
import * as SC from './styles'

const Services: React.FC = () => {
  const { sections: { services } } = useContent()
  return (
    <SC.Section data-section-name="services">
      <SC.Title data-effect="fade-in">
        { services.title }
      </SC.Title>
      <SC.CardContainer>
        {
          services.services.map((service: any) => (
            <SC.Card
              key={ service.name }
              data-effect="fade-in"
            >
              <SC.CardImage
                image={ getImage(service.image) as IGatsbyImageData }
                alt={ service.name }
              />
              <SC.CardName>
                { service.name }
              </SC.CardName>
            </SC.Card>
          ))
        }
      </SC.CardContainer>
    </SC.Section>
  )
}

export default Services
