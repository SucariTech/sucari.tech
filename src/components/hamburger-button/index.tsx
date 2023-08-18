import React from 'react'

/* MUI */
import SvgIcon from '@mui/material/SvgIcon'
import type { SvgIconProps } from '@mui/material/SvgIcon'

export interface HamburgerButtonProps extends SvgIconProps {
  open?: boolean
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  open,
  ...props
}) => {
  return (
    <SvgIcon
      {...props}
      sx={{
        ...props.sx,
        rect: {
          transitionDuration: '200ms',
          transformOrigin: 'center',
          transitionProperty: 'transform',
          transitionTimingFunction: 'ease-in-out',
          ...(open && {
            ':first-of-type': {
              transform:
                'translate3d(1.5px, 1.6px, 0) rotate3d(0, 0, 1, -45deg)',
            },
            ':last-of-type': {
              transform:
                'translate3d(1.5px, -1.2px, 0) rotate3d(0, 0, 1, 45deg)',
            },
          }),
        },
      }}
    >
      <svg
        fill="currentColor"
        height={24}
        width={24}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x={1} y={5} width={14} height={1.5} rx={1} />
        <rect x={1} y={9} width={14} height={1.5} rx={1} />
      </svg>
    </SvgIcon>
  )
}

export default HamburgerButton
