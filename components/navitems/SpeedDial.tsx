import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'

import HomeIcon from '@material-ui/icons/Home'
import LanguageIcon from '@material-ui/icons/Language'
import FolderIcon from '@material-ui/icons/Folder'
import CallIcon from '@material-ui/icons/Call'

import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 100,
    backgroundColor: 'red',
  },
  speedDial: {
    position: 'fixed',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(8),
      right: theme.spacing(3),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(4),
      left: theme.spacing(3),
    },
  },
  color: {
    backgroundColor: theme.palette.action.active,
  },
  close: {
    backgroundColor: theme.palette.error.main,
  },
}))

const Menu = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const clickHandler = (type: string) => {
    handleClose()
    window.location.href = `/#${type}`
  }

  return (
    <div className={classes.root}>
      <SpeedDial
        direction='down'
        ariaLabel='SpeedDial MenuIcon'
        className={classes.speedDial}
        icon={!open ? <MenuIcon /> : <MenuOpenIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        FabProps={{ className: open ? classes.color : classes.close }}
        open={open}
      >
        <SpeedDialAction
          icon={<HomeIcon />}
          tooltipTitle={'About'}
          onClick={() => clickHandler('about')}
        />

        <SpeedDialAction
          icon={<LanguageIcon />}
          tooltipTitle={'Stacks'}
          onClick={() => clickHandler('stacks')}
        />

        <SpeedDialAction
          icon={<FolderIcon />}
          tooltipTitle={'Projects'}
          onClick={() => clickHandler('project')}
        />

        <SpeedDialAction
          icon={<CallIcon />}
          tooltipTitle={'Contact Me'}
          onClick={() => clickHandler('contact')}
        />
      </SpeedDial>
    </div>
  )
}

export default Menu
