import React from 'react'

/* Config */
import config from '@config'

/* Hooks */
import { useContent } from '@contexts'

/* Context */
import { useMenu } from '../contexts'

/* Images */
import secondaryLogoSrc from '@images/secondary-logo.png'

/* Styles */
import {
  NetworkList,
  Network,
  NetworkLink
} from '../shared/styles'

import * as SC from './styles'

const Header = () => {
  const { sections } = useContent()
  const {
    isOpen: isOpenMenu,
    currentSection,
    openMenu,
    closeMenu,
    scrollToSection
  } = useMenu()
  return (
    <SC.Header>
      <SC.Nav>
        <SC.Title>{ config.domain }</SC.Title>
        <SC.ButtonWrapper onClick={ openMenu }>
          <SC.Button/>
        </SC.ButtonWrapper>
        <SC.MenuWrapper open={ isOpenMenu }>
          <SC.MenuHeader>
            <SC.Logo
              src={ secondaryLogoSrc }
              alt={ `${config.name} - Logo` }
              width="100"
              height="100"
            />
            <SC.ButtonWrapper onClick={ closeMenu }>
              <SC.Button isOpen/>
            </SC.ButtonWrapper>
          </SC.MenuHeader>
          <SC.MenuContent>
            <SC.MenuList>
              {
                Object.keys(sections).map(sectionKey => !sections[sectionKey].skippable
                  ? (
                    <SC.MenuOption
                      key={ sectionKey }
                      active={ currentSection === sectionKey }
                    >
                      <span onClick={ () => scrollToSection(sectionKey) }>
                        { sections[sectionKey].name }
                      </span>
                    </SC.MenuOption>
                  )
                  : null)
              }
            </SC.MenuList>
          </SC.MenuContent>
          <SC.MenuFooter>
            <NetworkList>
              { config.networks.map((network, index) => (
                <Network key={ index }>
                  <NetworkLink
                    aria-label={ network.label }
                    alt={ network.alt }
                    href={ network.to }
                    rel="noreferrer"
                    target="_blank"
                  >
                    <network.icon/>
                  </NetworkLink>
                </Network>
              )) }
            </NetworkList>
          </SC.MenuFooter>
        </SC.MenuWrapper>
      </SC.Nav>
    </SC.Header>
  )
}

export default Header
