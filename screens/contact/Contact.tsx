import React, { useState, useEffect } from 'react'

import {
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  Divider,
} from '@material-ui/core'
import { useStyles } from './cStyle'

import { Edit, Twitter, Facebook } from '@material-ui/icons'

import DividerText from '../../components/DividerWithText'
import MessageForm from './messageForm/MessageForm'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'

import { LightSpeed, Fade } from 'react-reveal'
import Jump from 'react-reveal/Jump'

const Contact = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const messageHandler = () => {
    setOpen(!open)
  }

  const text: string[] = ['Please', "don't", 'hesistate', 'to', 'contact', 'me']
  const arrayCopy = [...text].join(' ')
  const arrayText = Array.from(arrayCopy.split(''))

  useEffect(() => {
    let duration = 2
    let length = 800
    const smoothScroll = () => {
      duration += 3.5
      window.scrollBy(0, 5)
      if (length > duration) {
        setTimeout(() => {
          smoothScroll()
        }, 1)
      }
    }
    if (open) {
      setTimeout(smoothScroll, 500)
    }
  }, [open])

  return (
    <Paper id='contact' className={classes.paperWrapper}>
      <Typography component='div' variant='h5' className={classes.mainTitle}>
        <DividerText>Contact Me</DividerText>
      </Typography>
      <Typography
        component='div'
        gutterBottom
        variant='body1'
        className={classes.text}
      >
        {arrayText.map((letter, index) => (
          <span key={index}>
            <Fade
              wait={40}
              cascade
              collapse
              top
              delay={
                Math.floor(Math.random() * 10) +
                index * Math.floor(Math.random() * 150)
              }
            >
              <i>{letter}</i>
            </Fade>
          </span>
        ))}
        <Jump forever={true} duration={4000}>
          <EmojiPeopleIcon color='inherit' style={{ marginLeft: 5 }} />
        </Jump>
      </Typography>
      <Divider />
      <Grid container justify='center' className={classes.boxContainer}>
        <LightSpeed delay={2000} left>
          <Box className={classes.box}>
            <a
              href='https://twitter.com/KAVG034?ref_src=twsrc%5Etfw'
              rel='noopener noreferrer'
              target='_blank'
              className={classes.link}
            >
              <Button
                variant='contained'
                size='large'
                className={classes.button}
              >
                <Twitter color='primary' />
              </Button>
              <Box m={2}>
                <Typography variant='caption'>Twitter</Typography>
              </Box>
            </a>
          </Box>
        </LightSpeed>
        <Fade delay={3000} top>
          <Box className={classes.box}>
            <a
              href='https://www.facebook.com/kurt.gee.14/'
              target='_blank'
              rel='noopener noreferrer'
              className={classes.link}
            >
              <Button
                variant='contained'
                size='large'
                className={classes.button}
              >
                <Facebook color='primary' />
              </Button>
              <Box m={2} style={{ margin: '18px auto' }}>
                <Typography variant='caption'>Facebook</Typography>
              </Box>
            </a>
          </Box>
        </Fade>
        <LightSpeed delay={4000} right>
          <Box className={classes.box}>
            <Button
              variant='contained'
              size='large'
              className={classes.button}
              onClick={messageHandler}
            >
              <Edit color='error' />
            </Button>
            <Box m={2}>
              <Typography variant='caption'>Message Me</Typography>
            </Box>
          </Box>
        </LightSpeed>

        {open && (
          <Grid
            container
            justify='center'
            className={classes.messengerContainer}
          >
            <MessageForm />
          </Grid>
        )}
      </Grid>
    </Paper>
  )
}

export default Contact
