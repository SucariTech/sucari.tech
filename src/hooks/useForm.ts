import React from 'react'

const useForm = (initialFieldValues: any): Array<any> => {
  const [fields, setFields] = React.useState(initialFieldValues)
  const [validForm, setValidForm] = React.useState(false)

  /* Helpers */
  const validateAllFields = React.useCallback(() => {
    const buffer = fields
    const bufferKeys = Object.keys(buffer)
    let validCounter = 0

    bufferKeys.forEach(name => {
      const valid = buffer[name].validator(buffer[name].value)
      valid && validCounter++
      buffer[name].valid = valid
    })

    setFields({ ...buffer })
    setValidForm(validCounter === bufferKeys.length)
  }, [fields, validForm])

  const getFieldAttribute = React.useCallback((key = 'value') => {
    const values: any = {}
    Object.keys(fields).map(name => (
      values[name] = fields[name][key]
    ))
    return values
  }, [fields])

  const resetFields = React.useCallback((input: any) => {
    setFields({
      ...fields,
      ...input
    })
    setValidForm(false)
  }, [validForm, fields])

  /* Events */
  const onChange = React.useCallback((e: React.ChangeEvent<any>): void => {
    const buffer = fields
    const currentTargetName = e.target.name
    const currentTargetValue = e.target.value

    if (buffer[currentTargetName]) {
      buffer[currentTargetName].value = currentTargetValue
      buffer[currentTargetName].valid = buffer[currentTargetName].validator(buffer[currentTargetName].value)

      const bufferKeys = Object.keys(buffer)
      let validCounter = 0

      bufferKeys.forEach(name => (
        buffer[name].valid && validCounter++
      ))

      setFields({
        ...fields,
        [currentTargetName]: buffer[currentTargetName]
      })
      setValidForm(validCounter === bufferKeys.length)
    }
  }, [fields, validForm])

  const onSubmit = React.useCallback((args: {
    onSuccess?: (fieldValues: any) => void
    onFailed?: (fieldValidations: any) => void
  }) => (e: React.FormEvent<HTMLFormElement>): void => {
    const { onSuccess, onFailed } = args
    e.preventDefault()
    if (validForm) {
      onSuccess?.(getFieldAttribute('value'))
    } else {
      validateAllFields()
      onFailed?.(getFieldAttribute('valid'))
    }
  }, [validForm])

  return [
    onChange,
    onSubmit,
    fields,
    resetFields,
    validForm,
    validateAllFields,
    getFieldAttribute
  ]
}

export default useForm
