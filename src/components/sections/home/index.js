import React from 'react'

/* Gatsby Plugin Image */
import { getImage } from 'gatsby-plugin-image'

/* Hooks */
import { useContent } from '@contexts'

/* Layout Hooks */
import { useMenu } from '@layouts/main-layout'

/* Styles */
import * as SC from './styles'

const Home = () => {
  const { sections: { home } } = useContent()
  const { scrollToSection } = useMenu()
  return (
    <SC.Section data-section-name="home">
      <SC.Content>
        <SC.Left data-effect="fade-in">
          <SC.Image
            image={ getImage(home.image) }
            alt={ home.name }
            objectFit="contain"
          />
        </SC.Left>
        <SC.Right>
          <SC.Title data-effect="fade-in">
            {
              home.title.map((part, index) => (
                <SC.Word
                  key={ index }
                  decorate={ part.decorate }
                >
                  { part.label }
                </SC.Word>
              ))
            }
          </SC.Title>
          <SC.Paragraph data-effect="fade-in">{ home.paragraph }</SC.Paragraph>
          <SC.Links>
            {
              home.links.map((link, index) => (
                <li
                  key={ index }
                  data-effect="fade-in"
                  onClick={ () => scrollToSection(link.to) }
                >
                  { link.label }
                </li>
              ))
            }
          </SC.Links>
        </SC.Right>
      </SC.Content>
    </SC.Section>
  )
}

export default Home
