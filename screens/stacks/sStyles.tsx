import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    stacks: {
      minHeight: '100vh',
      backgroundColor: '#eee',
      padding: 0,
      margin: 0,
    },
    title_container: {
      padding: 20,
    },
    itemContainer: {
      textAlign: 'center',
      marginBottom: 20,
    },
    title: {
      width: 'fit-content',
      margin: '10px auto 20px',
      fontWeight: 900,
    },
    subTitle: {
      textAlign: 'center',
      fontWeight: 900,
      marginBottom: 20,
    },
    item: {
      padding: 10,
      margin: 5,
    },
    list: {
      padding: 5,
      [theme.breakpoints.up('sm')]: {
        padding: 20,
      },
      margin: 5,
      backgroundColor: 'transparent',
    },
    paper: {
      borderRadius: 10,
      padding: 20,
    },
    loading: {
      fontWeight: 900,
      marginLeft: 30,
      width: 140,
    },
    ongoing: {
      display: 'flex',
      justifyContent: 'center',
    },
  }))