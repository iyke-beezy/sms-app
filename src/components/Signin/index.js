import React, { useEffect, useState } from 'react'
import './styles.scss'
import { FormInput, FormButton } from '../Forms'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

import { useDispatch, useSelector } from 'react-redux'
import { signInUser, signInWithGoogle, signInWithFacebook, resetAuthForm } from './../../redux/User/user.actions'
import { Link, withRouter } from 'react-router-dom'

const mapState = ({ user }) => ({
    signInSuccess: user.signInSuccess,
    signInError: user.signInError
})

const Signin = props => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([]);
    const { signInSuccess, signInError } = useSelector(mapState)

    //sign in Success
    useEffect(() => {
        if (signInSuccess) {
            resetForm()
            dispatch(resetAuthForm())
            props.history.push('/')
        }
    }, [signInSuccess])


    //sign in failure
    useEffect(() => {
        if (Array.isArray(signInError) && signInError.length > 0) {
            setErrors(signInError)
        }
    }, [signInError])

    const resetForm = () => {
        setEmail('')
        setPassword('')
        setErrors([])
    }

    //sign in user on form submit
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signInUser({ email, password }))
    }

    //facebook sign in
    const handleFacebookSignIn = () => {
        dispatch(signInWithFacebook())
    }

    //google sign in
    const handleGoogleSignIn = () => {
        dispatch(signInWithGoogle())
    }


    return (
        <div className="SignIn">
            <h1> Sign In</h1>
            {errors && (
                <ul>
                    {errors.map((err, index) => (
                        <li key={index}>
                            {err}
                        </li>
                    ))}
                </ul>
            )}

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required={true}
                    handleChange={e => setEmail(e.target.value)}
                />

                <FormInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    required={true}
                    handleChange={e => setPassword(e.target.value)}
                />
                <div className="Buttons">
                    <FormButton htmlType="submit">
                        Login
                    </FormButton>

                    <FormButton>
                        <Link to="/signup">
                            Sign Up
                    </Link>

                    </FormButton>
                </div>
                <FormButton type='link'>
                    <Link to="/reset">
                        Reset Password
                    </Link>
                </FormButton>
                <div className="social-btns">
                    <FormButton icon={<GoogleOutlined />} onClick={handleGoogleSignIn}>
                        Sign In with Google
                        </FormButton>
                    <FormButton icon={<FacebookOutlined />} onClick={handleFacebookSignIn}>
                        Sign In with FaceBook
                        </FormButton>
                </div>
            </form>
        </div>

    )
}

export default withRouter(Signin)