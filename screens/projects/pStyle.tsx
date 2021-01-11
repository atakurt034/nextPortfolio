import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    projects: {
      minHeight: '100vh',
      padding: 10,
    },
    paper: {
      backgroundColor: '#ccc',
      padding: 10,
    },
    title: {
      fontWeight: 900,
      fontSize: '2rem',
      padding: 20,
    },
    root: {
      width: 300,
      margin: 'auto',
    },
    description: {
      minHeight: 135,
    },
    name: {
      fontweight: 900,
    },
  }))