import React, { useState } from 'react'

import {
    Tooltip,
    Statistic,
    Row,
    Col,
    Timeline,
    Progress,
    Avatar,
} from 'antd'

import { UserOutlined, UserAddOutlined } from '@ant-design/icons'
import './styles.scss'
import { FormButton } from '../../../components/Forms'

const DashboardSettings = props => {
    const [percent, setPercent] = useState(100)
    const [storePercent, setStorePercent] = useState(80)

    return (
        <div className="settings-menu">
            <div className="container">
                <div className="account">
                    <div className="avatar">
                        <Avatar size={54} icon={<UserOutlined />} />
                    </div>
                    <div className="user-info">
                        <p className="main-name">UserName</p>
                        <p>Free Plan</p>
                    </div>
                    <div className="upgrade">
                        <Tooltip title="Upgrade Membership">
                            <FormButton icon={<UserAddOutlined />} shape="circle" />
                        </Tooltip>

                    </div>
                </div>
                <hr />

                <div className="summary">
                    <Row gutter={12}>
                        <Col span={12}>
                            <Progress type="circle"
                                strokeColor={percent > 30 ?
                                    {
                                    '0%': '#108ee9',
                                    '100%': '#87d068',
                                } : {
                                    '100%': '#ff4d4f'
                                }}
                                percent={percent} />
                        </Col>
                        <Col span={12}>
                            <Statistic title="SMS Balance (Units)" value={112893} precision={2} />
                            <FormButton style={{ marginTop: 16, width: 'inherit' }}>
                                Recharge
                                    </FormButton>
                        </Col>
                    </Row>
                    <Row gutter={12} style={{ marginTop: 10 }}>
                        <Col span={12}>
                            <Progress type="circle"
                                strokeColor={
                                    storePercent > 30 ?
                                    {
                                    '0%': '#108ee9',
                                    '100%': '#87d068',
                                } : {
                                    '100%': '#ff4d4f'
                                }}
                                percent={storePercent}
                            />
                        </Col>
                        <Col span={12}>
                            <Statistic title="Data Space (per Unit Contact)" value={80} precision={2} />
                            <FormButton style={{ marginTop: 16, width: 'inherit' }}>
                                Recharge
                                    </FormButton>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default DashboardSettings