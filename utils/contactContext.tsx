import React, { useContext, createContext, useReducer } from 'react'
import axios from 'axios'
import {
  CONTACT_SEND_MAIL_FAIL,
  CONTACT_SEND_MAIL_REQUEST,
  CONTACT_SEND_MAIL_RESET,
  CONTACT_SEND_MAIL_SUCCESS,
} from '../constants/contactConstants'

const ContactContext = createContext({
  data: [],
  loading: false,
  success: false,
  error: '',
  status: '',
  sendMail: (mail: any) => {},
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
        data: action.payload.data,
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
  data: [{}],
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

  const sendMail = async (mail) => {
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

  return { loading, success, status, error, data, successHandler, sendMail }
}
