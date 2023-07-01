import React from 'react'

/* Hooks */
import { useContent } from '@contexts'

/* Styles */
import * as SC from './styles'

const About: React.FC = () => {
  const { sections: { about } } = useContent()
  return (
    <SC.Section data-section-name="about">
      <SC.Title data-effect="fade-in">
        { about.title }
      </SC.Title>
      <SC.Founder data-effect="fade-in">
        <span>{ about.founder.fullNames }</span>
        <span>{ about.founder.rol }</span>
      </SC.Founder>
      <SC.Line data-effect="fade-in"/>
      <SC.Paragraph data-effect="fade-in">
        { about.founder.message }
      </SC.Paragraph>
    </SC.Section>
  )
}

export default About
