export const isStringValid = (str: string, maxlength: number, minlength: number): boolean => {
  const stringValid = new RegExp(`^[\\S\\s]{${minlength},${maxlength}}$`)
  return stringValid.test(str.trim())
}

export const isEmailValid = (str: string): boolean => {
  const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return emailValid.test(str.trim()) && str.length < 256
}
