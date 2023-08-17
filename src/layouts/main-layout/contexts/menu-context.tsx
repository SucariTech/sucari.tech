import React from 'react'

/* Utils */
import { getRelativePosition } from '@utils/helpers'

/* Styles */
import * as SC from '../shared/styles'

const MenuContext = React.createContext({})

export interface MenuContextType {
  currentSection?: string
  isOpen?: boolean
  setCurrentSection?: React.Dispatch<React.SetStateAction<string | undefined>>
  openMenu?: () => void
  closeMenu?: () => void
  scrollToSection?: (sectionName?: string | undefined) => void
}

export const useMenu = (): MenuContextType =>
  React.useContext<MenuContextType>(MenuContext)

export const MenuProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const containerRef = React.useRef<null | HTMLDivElement>(null)

  const [isOpen, setIsOpen] = React.useState(false)
  const [currentSection, setCurrentSection] = React.useState<
    string | undefined
  >(undefined)
  const [sections, setSections] = React.useState<Array<HTMLElement>>([])

  const openMenu = React.useCallback(() => {
    setIsOpen(true)
  }, [])
  const closeMenu = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  const scrollToSection = React.useCallback(
    (sectionName?: string) => {
      if (containerRef.current) {
        const section = containerRef.current.querySelector(
          `[data-section-name="${sectionName}"]`,
        )
        if (section) {
          setCurrentSection(sectionName)
          section.scrollIntoView({ behavior: 'smooth' })
          closeMenu()
        }
      }
    },
    [closeMenu],
  )

  const isScrollIntoSection = React.useCallback(
    (section: HTMLElement): boolean => {
      const container = containerRef.current
      if (container) {
        const { top, bottom } = getRelativePosition(section, container)
        const offset = container.offsetHeight * 0.5
        return top + offset < container.offsetHeight && bottom - offset > 0
      }
      return false
    },
    [],
  )

  const observeSections = React.useCallback(() => {
    for (const section of sections) {
      if (isScrollIntoSection(section)) {
        setCurrentSection(section.dataset.sectionName)
        return
      }
    }
  }, [isScrollIntoSection, sections])

  React.useEffect(() => {
    if (containerRef.current) {
      const targets = containerRef.current.querySelectorAll<HTMLElement>(
        '[data-section-name]',
      ) as any
      setSections(targets)
    }
  }, [])

  React.useEffect(() => {
    observeSections()
  }, [observeSections])

  const value = React.useMemo(
    () => ({
      currentSection,
      isOpen,
      setCurrentSection,
      openMenu,
      closeMenu,
      scrollToSection,
    }),
    [isOpen, currentSection, openMenu, closeMenu, scrollToSection],
  )

  return (
    <MenuContext.Provider value={value}>
      <SC.Container ref={containerRef} onScroll={observeSections}>
        {children}
      </SC.Container>
    </MenuContext.Provider>
  )
}
