import React from 'react'
import Signup from './../../components/Signup'
import './styles.scss'

//ant-design components
import {
    UsergroupAddOutlined,
    ScheduleOutlined,
    SendOutlined
} from '@ant-design/icons'


const Register = props => {
    return (
        <div className="container">
            <div className="wrap">
                <div className="theme">
                    <div className="contents">
                        <p className="mainText">Words are timeless</p>
                        <p className="subText"> Let your messages create events.</p>
                    </div>

                </div>

                <div className="forms">
                    <div className="wrapper fade-in">
                        <Signup />

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

export default Register