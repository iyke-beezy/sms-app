import React, { useState, useEffect } from 'react'
import './styles.scss'
import { withRouter, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

//form components
import { FormInput, FormButton } from './../Forms'

//redux store actions
import { resetEmail, resetAuthForm } from './../../redux/User/user.actions'

const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    resetPasswordError: user.resetPasswordError
})

const ResetPassword = props => {

    const dispatch = useDispatch()
    const { resetPasswordSuccess, resetPasswordError } = useSelector(mapState)

    const [email, setEmail] = useState('')
    const [successText, setSuccessText] = useState(false)
    const [errors, setErrors] = useState([])

    const resetForm = () => {
        setEmail('')
        setErrors([])
    }

    //success 
    useEffect(() => {
        if (resetPasswordSuccess) {
            dispatch(resetAuthForm())
            resetForm()
            setSuccessText(true)
            setTimeout(() => {
                props.history.push('/login')
            }, 5000);

        }
    }, [resetPasswordSuccess])

    //error
    useEffect(() => {
        if (Array.isArray(resetPasswordError) && resetPasswordError.length > 0) {
            setErrors(resetPasswordError)
        }
    }, [resetPasswordError])

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(resetEmail({email}))
    }

    return (
        <div className="reset">
            <h1>Reset Password</h1>
            {successText && (
                <p className="success"> Check Your Email!</p>
            )}
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
                    name='email'
                    type='email'
                    value={email}
                    placeholder="Enter Email Address"
                    handleChange={(e) => setEmail(e.target.value)}
                />

                <FormButton htmlType="submit">
                    Reset
                </FormButton>

            </form>
        </div>

    )
}

export default withRouter(ResetPassword)