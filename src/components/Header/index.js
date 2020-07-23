import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">

                </div>
                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/signup">
                                Sign Up
                            </Link>

                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header