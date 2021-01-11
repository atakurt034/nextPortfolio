import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  paperWrapper: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    borderRadius: 0,
  },
  mainTitle: {
    width: 'fit-content',
    margin: '20px auto',
    padding: '20px 0',
    fontSize: '2rem',
  },
  button: {
    padding: 15,
    borderRadius: '100%',
    height: 60,
    [theme.breakpoints.up('sm')]: {
      height: 65,
    },
  },
  box: {
    textAlign: 'center',
    margin: 'auto',
    padding: 20,
    width: 100,
  },
  link: {
    textTransform: 'none',
    textDecoration: 'none',
    '&:visited': {
      color: 'inherit',
    },
    color: 'inherit',
  },
  boxContainer: {
    margin: '20px auto',
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
    lineHeight: 4,
  },
  messengerContainer: {
    margin: 20,
  },
}))
