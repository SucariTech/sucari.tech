import React from 'react'
import PropTypes from 'prop-types'

/* Utils */
import { getRelativePosition } from '@utils/helpers'

/* Styles */
import * as SC from '../shared/styles'

const MenuContext = React.createContext()

export const useMenu = () => React.useContext(MenuContext)

export const MenuProvider = ({ children }) => {
  const containerRef = React.useRef(null)

  const [isOpen, setIsOpen] = React.useState(false)
  const [currentSection, setCurrentSection] = React.useState('')
  const [sections, setSections] = React.useState([])

  const openMenu = React.useCallback(() => setIsOpen(true), [isOpen])
  const closeMenu = React.useCallback(() => setIsOpen(false), [isOpen])

  const scrollToSection = React.useCallback(sectionName => {
    const section = containerRef.current.querySelector(`[data-section-name="${sectionName}"]`)
    if (section) {
      setCurrentSection(sectionName)
      section.scrollIntoView({ behavior: 'smooth' })
      closeMenu()
    }
  }, [])

  const isScrollIntoSection = React.useCallback(section => {
    const container = containerRef.current
    const { top, bottom } = getRelativePosition(section, container)
    const offset = container.offsetHeight * 0.5
    return top + offset < container.offsetHeight && bottom - offset > 0
  }, [])

  const observeSections = React.useCallback(() => {
    for (const section of sections) {
      if (isScrollIntoSection(section)) {
        setCurrentSection(section.dataset.sectionName)
        return
      }
    }
  }, [sections])

  React.useEffect(() => {
    const targets = containerRef.current.querySelectorAll('[data-section-name]')
    setSections(targets)
  }, [])

  React.useEffect(() => {
    observeSections()
  }, [sections])

  const value = React.useMemo(() => ({
    currentSection,
    isOpen,
    setCurrentSection,
    openMenu,
    closeMenu,
    scrollToSection
  }), [isOpen, currentSection])

  return (
    <MenuContext.Provider value={ value }>
      <SC.Container
        ref={ containerRef }
        onScroll={ observeSections }
      >
        { children }
      </SC.Container>
    </MenuContext.Provider>
  )
}

MenuProvider.propTypes = {
  children: PropTypes.node
}
