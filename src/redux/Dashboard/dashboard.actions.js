import dashboardTypes from './dashboard.types'
import { getGroups, updateGroup, getContacts, addContacts, addGroups } from './../../firebase/utils'

export const createGroup = ({ name, contacts, id }) => async dispatch => {
    try {
        await addGroups({
            name,
            contacts,
        }, { user_id: id })
            .then(() => {
                dispatch({
                    type: dashboardTypes.CREATE_GROUP_SUCCESS,
                    payload: true
                })
            })
            .catch((err) => {
                dispatch({
                    type: dashboardTypes.CREATE_GROUP_ERROR,
                    payload: err
                })
            })
    }
    catch (err) {
        // console.log(err)
    }
}

export const setGroup = group => ({
    type: dashboardTypes.SET_CURRENT_GROUP,
    payload: group
})

export const loadGroups = (uid) => async dispatch => {
    try {
        const data = await getGroups(uid)
        dispatch({
            type: dashboardTypes.SET_GROUPS,
            payload: data
        })
    }
    catch (err) {
        // console.log(err)
    }
}

export const reformGroup = (group, update) => async dispatch => {
    try {
        if (group.name === update.name) {
            await updateGroup(group, update)
                .then(() => {
                    dispatch({
                        type: dashboardTypes.UPDATE_GROUP_SUCCESS,
                        payload: true
                    })
                })
                .catch(err => {
                    // console.log(err)
                })
        }
    }
    catch (err) {
        // console.log(err)
    }
}


export const loadContacts = uid => async dispatch => {
    try {
        const data = await getContacts(uid)
        dispatch({
            type: dashboardTypes.SET_CONTACTS,
            payload: data
        })
    }
    catch (err) {
        // console.log(err)
    }
}