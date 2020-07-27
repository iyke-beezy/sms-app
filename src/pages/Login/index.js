import React from 'react'
import './styles.scss'
import Signin from './../../components/Signin'

//ant-design components
import {
    UsergroupAddOutlined,
    ScheduleOutlined,
    SendOutlined
} from '@ant-design/icons'

const Login = props => {
    return (
        <div className="container">
            <div className="wrap">
                <div className="Login-theme">
                    <div className="contents">
                        <p className="mainText">Welcome back aboard!</p>
                        <p className="subText"> Relax and login. <br /> Time is money!</p>
                    </div>

                </div>

                <div className="Login-forms">
                    <div className="wrapper fade-in">
                        <Signin />

                        <div className="footer">
                            <div className="details">
                                <p className="details-icon"><UsergroupAddOutlined /></p>
                                <p className="details-text">Create and Manage User groups</p>
                            </div>
                            <div className="details">
                                <p className="details-icon"><SendOutlined /></p>
                                <p className="details-text">Send Messages to Specific Groups</p>
                            </div>
                            <div className="details">
                                <p className="details-icon"><ScheduleOutlined /></p>
                                <p className="details-text">Schedule Messages to Save Time</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Login