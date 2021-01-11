import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  about: {
    height: '100%',
  },
  imagewrapper: {
    height: '55vh',
    margin: 'auto',
    position: 'relative',
    padding: 20,
  },
  typewriter: {
    textAlign: 'center',
    margin: 'auto',
    padding: 10,
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto',
    },
  },
  image: {
    height: '100%',
    borderRadius: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
}))
