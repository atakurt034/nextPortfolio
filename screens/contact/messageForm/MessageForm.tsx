import React, { useState, useEffect } from 'react'
import { Button, Container, TextField, Paper } from '@material-ui/core'

import dotenv from 'dotenv'
dotenv.config()
const { GMAIL_USER } = process.env

import SendIcon from '@material-ui/icons/Send'

import { ModalLoader } from '@/components/ModalLoader'
import Message from '@/components/Message'
import { ContactModal } from '../contacktModal/ContactModal'
import { Fade } from 'react-reveal'

import { useStyles } from './mfStyle'

import { useForm } from 'react-hook-form'

import { useContact } from '@/lib/contactContext'

const MessageForm: React.FC = () => {
  const { register, handleSubmit, errors, clearErrors } = useForm()
  const classes = useStyles()

  const [open, setOpen] = useState<boolean>(false)

  const { loading, success, successHandler, sendMail } = useContact()

  const submitHandler = (data) => {
    const { name, email, subject, message } = data

    sendMail(name, email, subject, message)
  }

  const closeHandler = () => {
    setOpen(false)
    successHandler('success')
  }

  useEffect(() => {
    if (!loading) {
      if (success) {
        setOpen(true)
        clearErrors()
      }
    }
  }, [loading, success])

  return (
    <>
      {open && <ContactModal open={open} handleClose={closeHandler} />}
      {loading ? (
        <ModalLoader />
      ) : (
        <Fade delay={200} duration={500}>
          <Paper elevation={12} className={classes.paperWrapper}>
            <Container component='main' maxWidth='xs'>
              <form
                onSubmit={handleSubmit(submitHandler)}
                action={GMAIL_USER}
                method='POST'
                encType='multipart/form-data'
              >
                <TextField
                  inputRef={register({
                    required: true,
                    minLength: {
                      value: 3,
                      message: 'Please input a minimum of 3 letters',
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: 'Please use only letters',
                    },
                  })}
                  error={errors.name}
                  type='text'
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  label='Full Name'
                  name='name'
                  autoFocus
                />
                {errors.name && (
                  <Message variant='error'>{errors.name.message}</Message>
                )}
                <TextField
                  inputRef={register({
                    required: true,
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Please provide a valid email',
                    },
                  })}
                  error={errors.email}
                  type='email'
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  label='Email Address'
                  name='email'
                />
                {errors.email && (
                  <Message variant='error'>{errors.email.message}</Message>
                )}
                <TextField
                  type='text'
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  label='Subject'
                  name='subject'
                />
                <TextField
                  inputRef={register({
                    required: true,
                    validate: (text: string) => text.trim().length >= 5,
                  })}
                  error={errors.message}
                  type='text'
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  label='Message'
                  multiline
                  rows={5}
                  name='message'
                />
                {errors.message && (
                  <Message variant='error'>
                    Don't be shy. Please message me with atleast 5 characters.
                  </Message>
                )}
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='default'
                  size='large'
                  startIcon={<SendIcon />}
                >
                  Submit
                </Button>
              </form>
            </Container>
          </Paper>
        </Fade>
      )}
    </>
  )
}

export default MessageForm
