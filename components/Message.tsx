import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

interface Props {
variant: 'error'| 'info'| 'success'| 'warning'
children: ReactNode
}

 const Message:React.FC<Props> = ({ variant, children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Alert severity={variant} >{children}</Alert>
    </div>
  )
}

export default Message
