import styled, { keyframes } from 'styled-components'

const getAnimationDuration = (n: number): number => n * 0.1 * 2

const rectangleAnimation = keyframes`
  0%, 40%, 100%{
    transform: scale3d(1, 0.65, 1);
  }20%{
    transform: scale3d(1, 1, 1);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: fit-content;
  height: 1em;
`

export interface RectangleProps {
  numberOfRectangles: number
  order: number
}

export const Rectangle = styled.div<RectangleProps>`
  height: 1em;
  width: 0.3em;
  margin: 0.1em;
  background: var(--third-light);
  animation-name: ${rectangleAnimation};
  animation-duration: ${({ numberOfRectangles }) => `${getAnimationDuration(numberOfRectangles)}s`};
  animation-delay: ${({ order, numberOfRectangles }) => `-${getAnimationDuration(numberOfRectangles) - 0.1 * order}s`};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`
