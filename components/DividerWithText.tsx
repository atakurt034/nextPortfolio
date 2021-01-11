import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  border: {
    borderBottom: `2px dashed #000`,
    width: 50,
  },
  content: {
    width: '100%',
    textAlign: 'center',
  },
}))

interface DividerProps {
  children: ReactNode
}

const DividerWithText:React.FC<DividerProps> = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.border} />
      <span className={classes.content}>{children}</span>
      <div className={classes.border} />
    </div>
  )
}
export default DividerWithText
