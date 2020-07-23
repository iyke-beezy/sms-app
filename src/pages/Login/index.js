import React from 'react'
import './styles.scss'
import Signin from './../../components/Signin'

const Login = props => {
    return (
        <div className="container">
            <div className="wrap">
                <div className="theme">
                    <div className="contents">
                        <p className="mainText">A few clicks away from creating your account</p>
                        <p className="subText"> Start your journey in minutes. <br /> Save time and money</p>
                    </div>

                </div>

                <div className="forms">
                    <div className="wrapper fade-in">
                        <Signin />
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Login