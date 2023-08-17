import React from 'react'

/* Utils */
import { getRelativePosition } from '@utils/helpers'

/* Styles */
import * as SC from './styles'

export interface FadeInEffectProps extends React.ComponentPropsWithRef<'div'> {
  transitionDuration?: string
  transitionTimingFunction?: string
  initialOpacity?: string
  finalOpacity?: string
  initialScale?: string
  finalScale?: string
}

const FadeInEffect = React.forwardRef<HTMLDivElement, FadeInEffectProps>(
  (
    {
      children,
      transitionDuration = '0.4s',
      transitionTimingFunction = 'ease-in-out',
      initialOpacity = '0',
      finalOpacity = '1',
      initialScale = '1.35',
      finalScale = '1',
      ...props
    },
    ref,
  ) => {
    const containerRef = React.useRef<null | HTMLDivElement>(null)

    React.useEffect(() => {
      containerRef.current = (ref as any)?.current || containerRef.current
      const container = containerRef.current

      if (!container) return

      const targets = container.querySelectorAll<HTMLElement>(
        '[data-effect="fade-in"]',
      )

      const fadeIn = (target: HTMLElement): void => {
        target.style.transitionDuration = transitionDuration
        target.style.opacity = finalOpacity
        target.style.transform = `scale3d(${finalScale}, ${finalScale}, 1)`
      }
      const fadeOut = (target: HTMLElement): void => {
        target.style.transitionDuration = '0'
        target.style.opacity = initialOpacity
        target.style.transform = `scale3d(${initialScale}, ${initialScale}, 1)`
      }

      const init = (): void => {
        targets.forEach(target => {
          target.style.transitionProperty = 'opacity, transform'
          target.style.transitionTimingFunction = transitionTimingFunction
          fadeOut(target)
        })
      }

      const effect = (): void => {
        targets.forEach(target => {
          const { top } = getRelativePosition(target, container)
          if (top < container.offsetHeight) fadeIn(target)
        })
      }

      init()
      effect()

      container.addEventListener('scroll', effect)
      container.focus()

      return () => {
        container.removeEventListener('scroll', effect)
      }
    }, [
      children,
      transitionDuration,
      transitionTimingFunction,
      initialOpacity,
      finalOpacity,
      initialScale,
      finalScale,
    ])

    return (
      <SC.Container ref={(ref as any) || containerRef} tabIndex={0} {...props}>
        {children}
      </SC.Container>
    )
  },
)

export default FadeInEffect
