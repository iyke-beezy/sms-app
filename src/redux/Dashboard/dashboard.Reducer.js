import dashboardTypes from './dashboard.types'

const INITIAL_STATE = {
    groups: [],
    currentGroup: [],
    contacts: [],
    createGroupSuccess: false,
    createGroupError: [],
    updateGroupSuccess: false
}

const dashboardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case dashboardTypes.SET_GROUPS:
            return {
                ...state,
                groups: action.payload
            }
        case dashboardTypes.SET_CURRENT_GROUP:
            return {
                ...state,
                currentGroup: action.payload
            }
        case dashboardTypes.CREATE_GROUP_SUCCESS:
            return {
                ...state,
                createGroupSuccess: action.payload
            }
        case dashboardTypes.CREATE_GROUP_ERROR:
            return {
                ...state, 
                createGroupError: action.payload
            }
        case dashboardTypes.UPDATE_GROUP_SUCCESS:
            return {
                ...state,
                updateGroupSuccess: action.payload
            }
        case dashboardTypes.SET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            }
        default:
            return state
    }
}

export default dashboardReducer