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
                <div className="theme">
                    <div className="contents">
                        <p className="mainText">A few clicks away from creating your account</p>
                        <p className="subText"> Start your journey in minutes. <br /> Save time and money</p>
                    </div>

                </div>

                <div className="forms">
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