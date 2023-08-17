export const getRelativePosition = (
  target: HTMLElement,
  parent: HTMLElement,
): Record<string, number> => {
  const containerPosition = parent.getBoundingClientRect()
  const targetPosition = target.getBoundingClientRect()

  const top = targetPosition.top - containerPosition.top
  const bottom = top + target.offsetHeight
  const left = targetPosition.left - containerPosition.left
  const right = left + target.offsetWidth
  return {
    top,
    bottom,
    left,
    right,
  }
}
