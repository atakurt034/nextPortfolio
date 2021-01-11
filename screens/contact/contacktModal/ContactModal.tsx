import React, {  useEffect, useState } from 'react'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import { Box, Button, Container, Paper, Typography } from '@material-ui/core'

import {useStyles} from './cStyle';

import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'

import { useSelector } from 'react-redux'

/// <reference path=./global.d.ts />
import RubberBand from 'react-reveal/RubberBand'

interface Props {
  open: boolean,
  handleClose: any
}

interface SendMail {
  contactSendMail: {}[]
}
interface SendMailProps {
  data: {}[],
  loading: boolean,
  error: {}[],
  status: string
}


export const ContactModal:React.FC<Props> = ({ open, handleClose }) => {
  const classes = useStyles()
  const [valid, setValid] = useState(false)

  const contactSendMail = useSelector<SendMail>((state) => state.contactSendMail)
  const { data, loading, error, status } = contactSendMail as SendMailProps

  useEffect(() => {
    if (data) {
      if (status === 'success') {
        setValid(true)
      }
    }
  }, [data, loading, error, status])

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <RubberBand>
          <Container maxWidth='sm' className={classes.container}>
            <Paper elevation={12} className={classes.paper}>
              <Box className={classes.textbox}>
                {valid ? (
                  <CheckCircleIcon fontSize='large' className={classes.icon} />
                ) : (
                  <ErrorIcon fontSize='large' color='error' />
                )}
                <Typography variant='h5' className={classes.title}>
                  {valid ? 'Message sent' : 'Message sending failed'}
                </Typography>
              </Box>
              <Typography variant='body2' className={classes.body}>
                {valid
                  ? 'Thank you for contacting me. I will reply to you as soon as I can. Have a nice day!'
                  : 'Only 1 message per hour is allowed. Please try again later. Thank you'}
              </Typography>
              <Box className={classes.box}>
                <Button
                  size='large'
                  variant='contained'
                  onClick={handleClose}
                  className={classes.button}
                >
                  OK
                </Button>
              </Box>
            </Paper>
          </Container>
        </RubberBand>
      </Modal>
    </div>
  )
}
