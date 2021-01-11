import {
  CONTACT_SEND_MAIL_FAIL,
  CONTACT_SEND_MAIL_REQUEST,
  CONTACT_SEND_MAIL_RESET,
  CONTACT_SEND_MAIL_SUCCESS,
} from '../constants/contactConstants'

interface Props {
  state: {};
  action: {type: string; payload: {status: string, data: {}[]}}
}

export const contactSendMailReducer = (state:Props['state'] = {}, action: Props['action']) => {
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
