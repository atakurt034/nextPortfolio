import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { projectListReducers } from '../../reducers/projectReducers'
import { contactSendMailReducer } from '../../reducers/contactReducers'

const reducer = combineReducers({
  projectList: projectListReducers,
  contactSendMail: contactSendMailReducer,
})
const middleware = [thunk]

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
