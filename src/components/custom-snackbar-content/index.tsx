import React from 'react'

/* Hooks */
import { useEventCallback } from 'usehooks-ts'

/* MUI */
import Alert from '@mui/material/Alert'
import Paper from '@mui/material/Paper'

/* Notistack */
import { SnackbarContent, useSnackbar } from 'notistack'
import type { CustomContentProps } from 'notistack'

const CustomSnackbarContent = React.forwardRef<
  HTMLDivElement,
  CustomContentProps
>(({ id, message, variant }, ref) => {
  const { closeSnackbar } = useSnackbar()

  const handleClose = useEventCallback(() => {
    closeSnackbar(id)
  })

  return (
    <SnackbarContent ref={ref} role="alert">
      <Paper sx={{ width: '100%' }} variant="outlined">
        <Alert
          onClose={handleClose}
          severity={variant === 'default' ? 'success' : variant}
          variant="filled"
        >
          {message}
        </Alert>
      </Paper>
    </SnackbarContent>
  )
})

CustomSnackbarContent.displayName = 'CustomSnackbarContent'

export default CustomSnackbarContent
