import React from 'react'
import './styles.scss'
import { FormInput, FormButton } from '../Forms'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Signin = props => {
    return (
        <div className="SignIn">
            <h1> Sign In</h1>
            <form>
                <FormInput
                    type="email"
                    name="email"
                    placeholder="Email Address"

                />

                <FormInput
                    type="password"
                    name="password"
                    placeholder="Password"

                />
                <Link to="/">
                    Reset Password
                </Link>
                <div className="Buttons">

                    <FormButton>
                        Login
                    </FormButton>
                    <div className="social-btns">
                        <FormButton icon={<GoogleOutlined />}>
                            Sign In with Google
                        </FormButton>
                        <FormButton icon={<FacebookOutlined />}>
                            Sign In with FaceBook
                        </FormButton>
                    </div>
                </div>


            </form>
        </div>

    )
}

export default Signin