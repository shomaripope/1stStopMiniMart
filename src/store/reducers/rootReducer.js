import authReducer from './authReducer'
import eventReducer from './eventReducer'
import requestReducer from './requestReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  event: eventReducer,
  post: requestReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer