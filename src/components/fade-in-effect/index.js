import React from 'react'
import PropTypes from 'prop-types'

/* Utils */
import { getRelativePosition } from '@utils/helpers'

/* Styles */
import * as SC from './styles'

const FadeInEffect = React.forwardRef(({
  children,
  transitionDuration = '0.4s',
  transitionTimingFunction = 'ease-in-out',
  initialOpacity = '0',
  finalOpacity = '1',
  initialScale = '1.35',
  finalScale = '1',
  ...props
}, ref) => {
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    containerRef.current = ref?.current || containerRef.current
    const container = containerRef.current
    const targets = container.querySelectorAll('[data-effect="fade-in"]')

    const fadeIn = target => {
      target.style.transitionDuration = transitionDuration
      target.style.opacity = finalOpacity
      target.style.transform = `scale3d(${finalScale}, ${finalScale}, 1)`
    }
    const fadeOut = target => {
      target.style.transitionDuration = '0'
      target.style.opacity = initialOpacity
      target.style.transform = `scale3d(${initialScale}, ${initialScale}, 1)`
    }

    const init = () => targets.forEach(target => {
      target.style.transitionProperty = 'opacity, transform'
      target.style.transitionTimingFunction = transitionTimingFunction
      fadeOut(target)
    })

    const effect = () => {
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
  }, [children])

  return (
    <SC.Container
      ref={ ref || containerRef }
      tabIndex="0"
      { ...props }
    >
      { children }
    </SC.Container>
  )
})

FadeInEffect.displayName = 'FadeInEffect'

FadeInEffect.propTypes = {
  children: PropTypes.node,
  transitionDuration: PropTypes.string,
  transitionTimingFunction: PropTypes.string,
  initialOpacity: PropTypes.string,
  finalOpacity: PropTypes.string,
  initialScale: PropTypes.string,
  finalScale: PropTypes.string
}

export default FadeInEffect
