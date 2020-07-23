import { combineReducers } from 'redux'
import userReducer from './User/user.Reducer'

export default combineReducers({
    user: userReducer
})