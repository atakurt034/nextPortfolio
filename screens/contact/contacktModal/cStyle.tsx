import {makeStyles} from '@material-ui/core';
import green from '@material-ui/core/colors/green'

export const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      padding: 20,
      width: '100%',
      margin: 'auto',
    },
    container: {
      padding: 0,
      borderRadius: 10,
      width: '90%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    title: {
      padding: 5,
      margin: 5,
    },
    body: {
      padding: 5,
      margin: 5,
    },
    box: {
      textAlign: 'center',
    },
    textbox: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    icon: {
      color: green[700],
    },
    button: {
      width: 100,
    },
  }))