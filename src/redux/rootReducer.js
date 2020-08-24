import { combineReducers } from 'redux'
import userReducer from './User/user.Reducer'
import dashboardReducer from './Dashboard/dashboard.Reducer'

export default combineReducers({
    user: userReducer,
    dashboard: dashboardReducer
})