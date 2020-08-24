import dashboardTypes from './dashboard.types'

const INITIAL_STATE = {
    groups: [],
    users: [],
}

const dashboardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case dashboardTypes.ADD_USER_START:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case dashboardTypes.CREATE_GROUP_START:
            return {
                ...state,
                groups: [...state.groups, action.payload]
            }
        default:
            return state
    }
}

export default dashboardReducer