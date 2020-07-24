import userTypes from './user.types'
import { auth, handleUser, GoogleProvider, FacebookProvider } from '../../firebase/utils'

export const setCurrentUser = (user) => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
})

export const resetAuthForm = () => ({
    type: 'RESET_AUTH_FORM',
})

export const signInUser = ({ email, password }) => async dispatch => {
    try {
        await auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                dispatch({
                    type: userTypes.SIGN_IN_SUCCESS,
                    payload: true
                })
            })
            .catch((err) => {
                switch (err.code) {
                    case "auth/wrong-password":
                        return (
                            dispatch({
                                type: userTypes.SIGN_IN_ERROR,
                                payload: ['Incorrect Password!']
                            })
                        )
                    case "auth/user-not-found":
                        return (
                            dispatch({
                                type: userTypes.SIGN_IN_ERROR,
                                payload: ['User Not Found! Please register if you don\'t have an account. ']
                            })
                        )
                    default:
                        return console.log(err)
                }

            })
    } catch (err) {
        //console.log(err)
    }
}

export const signUpUser = ({ displayName, email, password, confirmPassword }) => async dispatch => {
    if (password !== confirmPassword) {
        const err = ['Passwords don\'t match']
        dispatch({
            type: userTypes.SIGN_UP_ERROR,
            payload: err
        })
        return;
    }

    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        await handleUser(user, { displayName })
        dispatch({
            type: userTypes.SIGN_UP_SUCCESS,
            payload: true
        })
    } catch (err) {
        // console.log(err)
    }
}

export const resetEmail = ({ email }) => async dispatch => {
    const config = {
        url: 'http://localhost:3000/login'
    }
    try {
        await auth.sendPasswordResetEmail(email, config)
            .then(() => {
                dispatch({
                    type: userTypes.RESET_PASSWORD_SUCCESS,
                    payload: true
                })
            })
            .catch(() => {
                const err = ['Email doesn\'t exist. Please try again ']
                dispatch({
                    type: userTypes.RESET_PASSWORD_ERROR,
                    payload: err
                })
                // setErrors(['Email doesn\'t exist. Please try again '])
            })
    } catch (err) {
        // console.log(err)
    }
}

export const signInWithGoogle = () => async dispatch => {
    try {
        await auth.signInWithPopup(GoogleProvider)
            .then(() => {
                dispatch({
                    type: userTypes.SIGN_IN_SUCCESS,
                    payload: true
                })
            })
    } catch (err) {
        // console.log(err)
    }
}

export const signInWithFacebook = () => async dispatch => {
    try {
        await auth.signInWithPopup(FacebookProvider)
            .then(() => {
                dispatch({
                    type: userTypes.SIGN_IN_SUCCESS,
                    payload: true
                })
            })
    } catch (err) {
        // console.log(err)
    }
}