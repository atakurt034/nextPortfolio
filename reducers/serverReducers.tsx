import {
  SERVER_STATS_FAIL,
  SERVER_STATS_REQUEST,
  SERVER_STATS_SUCCESS,
  SERVER_SET_EMAIL_COUNT_FAIL,
  SERVER_SET_EMAIL_COUNT_REQUEST,
  SERVER_SET_EMAIL_COUNT_SUCCESS,
  SERVER_SET_EMAIL_TIME_FAIL,
  SERVER_SET_EMAIL_TIME_REQUEST,
  SERVER_SET_EMAIL_TIME_SUCCESS,
  SERVER_SET_VISIT_COUNT_FAIL,
  SERVER_SET_VISIT_COUNT_REQUEST,
  SERVER_SET_VISIT_COUNT_SUCCESS,
  SERVER_SET_EMAIL_TIME_RESET,
} from '../constants/serverConstants'


interface Props {
  state: {};
  action: {type: string; payload: {}[]}
}

export const getServerStatsReducer = (state: Props['state'] = {}, action:Props['action']) => {
  switch (action.type) {
    case SERVER_STATS_REQUEST:
      return { loading: true }
    case SERVER_STATS_SUCCESS:
      return { loading: false, statsDetails: action.payload }
    case SERVER_STATS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const setVisitorCountReducer = (state: Props['state'] = {}, action: Props['action']) => {
  switch (action.type) {
    case SERVER_SET_VISIT_COUNT_REQUEST:
      return { loading: true }
    case SERVER_SET_VISIT_COUNT_SUCCESS:
      return { loading: false, visitorCount: action.payload }
    case SERVER_SET_VISIT_COUNT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const setEmailCountReducer = (state:Props['state'] = {}, action:Props['action']) => {
  switch (action.type) {
    case SERVER_SET_EMAIL_COUNT_REQUEST:
      return { loading: true }
    case SERVER_SET_EMAIL_COUNT_SUCCESS:
      return { loading: false, emailCount: action.payload }
    case SERVER_SET_EMAIL_COUNT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const setEmailTimeReducer = (state: Props['state'] = { time: {} }, action: Props['action']) => {
  switch (action.type) {
    case SERVER_SET_EMAIL_TIME_REQUEST:
      return { loading: true }
    case SERVER_SET_EMAIL_TIME_SUCCESS:
      return { loading: false, time: action.payload }
    case SERVER_SET_EMAIL_TIME_FAIL:
      return { loading: false, error: action.payload }
    case SERVER_SET_EMAIL_TIME_RESET:
      return { time: {} }
    default:
      return state
  }
}
