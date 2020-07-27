import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './styles.scss'

//form components
import { FormInput, FormButton } from '../Forms'

//store actions
import { signUpUser, resetAuthForm } from './../../redux/User/user.actions'

const mapState = ({ user }) => ({
    signUpSuccess: user.signUpSuccess,
    signUpError: user.signUpError
})

const Signup = props => {
    const dispatch = useDispatch()
    const { signUpSuccess, signUpError } = useSelector(mapState)

    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])

    const resetForm = () => {
        setDisplayName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setErrors([])
    }

    //signup success hook
    useEffect(() => {
        if (signUpSuccess) {
            dispatch(resetAuthForm())
            resetForm()
            props.history.push('/')
        }
    }, [signUpSuccess])

    //signup error hook
    useEffect(() => {
        if (Array.isArray(signUpError) && signUpError.length > 0) {
            setErrors(signUpError)
        }
    }, [signUpError])

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signUpUser({
            displayName,
            email,
            password,
            confirmPassword
        }))
    }

    return (
        <div className="SignUp">
            <h1> Sign Up</h1>
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
                    type="text"
                    name="displayName"
                    value={displayName}
                    placeholder="Full Name"
                    handleChange={e => setDisplayName(e.target.value)}
                />

                <FormInput
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    required={true}
                    handleChange={e => setEmail(e.target.value)}
                />

                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    required={true}
                    handleChange={e => setPassword(e.target.value)}
                />

                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    required={true}
                    handleChange={e => setConfirmPassword(e.target.value)}
                />

                <div className="Buttons">

                    <FormButton htmlType="submit">
                        Sign Up
                    </FormButton>
                    <FormButton>
                        <Link to="/login">
                            Login
                    </Link>

                    </FormButton>

                    {/* <div className="social-btns">
                        <FormButton icon={<GoogleOutlined />} onClick={handleGoogleSignIn}>
                            Sign In with Google
                        </FormButton>
                        <FormButton icon={<FacebookOutlined />} onClick={handleFacebookSignIn}>
                            Sign In with FaceBook
                        </FormButton>
                    </div> */}
                </div>
            </form>
        </div>

    )
}

export default withRouter(Signup)