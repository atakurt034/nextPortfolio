import React, { useContext, createContext, useReducer } from 'react'
import axios from 'axios'
import {
  CONTACT_SEND_MAIL_FAIL,
  CONTACT_SEND_MAIL_REQUEST,
  CONTACT_SEND_MAIL_RESET,
  CONTACT_SEND_MAIL_SUCCESS,
} from '../../../constants/contactConstants'

const ContactContext = createContext({
  loading: false,
  success: false,
  error: '',
  status: '',
  sendMail: (name, email, subject, message) => {},
  successHandler: (text: any) => {},
})

export const ContactProvider = ({ children }) => {
  const store = ContactStore()
  return (
    <ContactContext.Provider value={store}>{children}</ContactContext.Provider>
  )
}

const contactReducer = (state, action) => {
  switch (action.type) {
    case CONTACT_SEND_MAIL_REQUEST:
      return { loading: true, success: false }
    case CONTACT_SEND_MAIL_SUCCESS:
      return {
        loading: false,
        success: true,
        status: action.payload.status,
      }
    case CONTACT_SEND_MAIL_FAIL:
      return { loading: false, error: action.payload }
    case CONTACT_SEND_MAIL_RESET:
      return {}
    default:
      return state
  }
}

const initialState = {
  loading: false,
  success: false,
  status: '',
  error: '',
}

export const useContact = () => useContext(ContactContext)

const ContactStore = () => {
  const [state, dispatch] = useReducer(contactReducer, initialState)
  const { loading, success, status, error, data } = state

  const successHandler = (text) => {
    if (text === 'success') {
      dispatch({ type: CONTACT_SEND_MAIL_RESET })
    }
  }

  const sendMail = async (name, email, subject, message) => {
    const mail = { name, email, subject, message }

    try {
      dispatch({ type: CONTACT_SEND_MAIL_REQUEST })
      const url = 'https://server0342021.herokuapp.com/api/contacts'

      const data = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(mail), // body data type must match "Content-Type" header
      })
      dispatch({
        type: CONTACT_SEND_MAIL_SUCCESS,
        payload: { status: data.status },
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

  return { loading, success, status, error, successHandler, sendMail }
}
