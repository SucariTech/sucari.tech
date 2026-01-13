'use client'

import React from 'react'

/* Hooks */
import { useEventCallback } from 'usehooks-ts'

export interface MenuContextType {
  currentSectionId?: string | null
  isMenuOpen: boolean
  closeMenu: () => void
  openMenu: () => void
  scrollToSection: (sectionId?: string | null) => void
}

const noop = (): void => {}

export const MenuContext = React.createContext<MenuContextType>({
  currentSectionId: '',
  isMenuOpen: false,
  closeMenu: noop,
  openMenu: noop,
  scrollToSection: noop,
})

export const isScrollIntoSection = (
  section: HTMLElement,
  offset: number = 0,
): boolean =>
  window.scrollY + offset >= section.offsetTop &&
  window.scrollY + offset <= section.offsetTop + section.offsetHeight

export interface MenuProviderProps extends React.PropsWithChildren {
  offset?: number
}

export const MenuProvider: React.FC<MenuProviderProps> = ({
  children,
  offset = 0,
}) => {
  const [currentSectionId, setCurrentSectionId] =
    React.useState<MenuContextType['currentSectionId']>(undefined)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const closeMenu = React.useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const openMenu = React.useCallback(() => {
    setIsMenuOpen(true)
  }, [])

  const scrollToSection: MenuContextType['scrollToSection'] = React.useCallback(
    sectionId => {
      const currentSection = document.querySelector<HTMLElement>(
        `#${sectionId}`,
      )
      if (currentSection) {
        const top = currentSection.offsetTop - offset

        window.scrollTo({
          top,
          behavior: 'smooth',
        })

        closeMenu()
      }
    },
    [offset, closeMenu],
  )

  const handleScroll = useEventCallback(() => {
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      if (isScrollIntoSection(section, offset * 2)) {
        setCurrentSectionId(section.id)
      }
    })
  })

  React.useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) /* eslint-disable-line react-hooks/exhaustive-deps */

  const value = React.useMemo(
    (): MenuContextType => ({
      currentSectionId,
      isMenuOpen,
      closeMenu,
      openMenu,
      scrollToSection,
    }),
    [currentSectionId, isMenuOpen, closeMenu, openMenu, scrollToSection],
  )

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
