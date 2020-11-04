import React from 'react'
import './styles.scss'
import Header from '../../components/Header'
import { Row } from 'antd'
import networks from '../../assets/networks.jpg'

const Homepage = props => {
    return (
        <div className="body">
            <div className="main-header">
                <Header />

                <div className="main-text">
                    <p>Send Bulk SMS with ease.
                    Schedule SMS, create groups, easy drag and drop form
                    Random giveaways generator, link your sms lead generation form to social media ads
                grow your leads and build your user base</p>
                </div>
            </div>

            <div className="about">
                <Row justify="center">
                    <div className="about-image">
                        <img src={networks} alt="" />
                    </div>

                    <div className="about-text">

                    </div>
                </Row>

            </div>
        </div>
    )
}
export default Homepage