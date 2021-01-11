import React from 'react'
import { Paper, makeStyles, Grid, Box, IconButton } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'

const useStyles = makeStyles((theme) => ({
  footer: {
    height: 85,
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 15,
    borderRadius: 0,
  },
  item: {
    textAlign: 'center',
    padding: 2,
  },
}))

const Footer = () => {
  const classes = useStyles()

  const clickHandler = (event: string) => {
    window.open(event, '_blank')
  }

  return (
    <Paper elevation={10} className={classes.footer}>
      <Grid container justify='center'>
        <Grid item xs={12} className={classes.item}>
          <Box component='span' mx={1}>
            <IconButton
              style={{ zIndex: 100 }}
              size='small'
              color='primary'
              onClick={() =>
                clickHandler('https://twitter.com/KAVG034?ref_src=twsrc%5Etfw')
              }
            >
              <TwitterIcon />
            </IconButton>
          </Box>
          <Box component='span' mx={1}>
            <IconButton
              style={{ zIndex: 100 }}
              size='small'
              color='inherit'
              onClick={() => clickHandler('https://github.com/atakurt034')}
            >
              <GitHubIcon />
            </IconButton>
          </Box>
          <Box component='span' mx={1}>
            <IconButton
              style={{ zIndex: 100 }}
              size='small'
              color='primary'
              onClick={() =>
                clickHandler('https://www.facebook.com/kurt.gee.14/')
              }
            >
              <FacebookIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          Copyright: &copy; KAVG {new Date().getFullYear()}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Footer
