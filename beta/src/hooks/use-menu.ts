'use client'

import React from 'react'

/* Contexts */
import { MenuContext } from '@/contexts/menu-context'
import type { MenuContextType } from '@/contexts/menu-context'

const useMenu = (): MenuContextType => React.useContext(MenuContext)

export default useMenu
