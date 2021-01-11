import {
  CONTACT_SEND_MAIL_FAIL,
  CONTACT_SEND_MAIL_REQUEST,
  CONTACT_SEND_MAIL_SUCCESS,
} from '../constants/contactConstants'

import axios from 'axios'

interface Props {
  mail: { name: string; email: string; subject: string; message: string }
  dispatch: { type: string; payload?: {} }
}

export const sendMail = (mail: Props['mail']) => async (
  dispatch: (props: Props['dispatch']) => void
) => {
  try {
    dispatch({ type: CONTACT_SEND_MAIL_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/contacts', mail, config)
    dispatch({
      type: CONTACT_SEND_MAIL_SUCCESS,
      payload: { status: data.status, data: data.data },
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: CONTACT_SEND_MAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
