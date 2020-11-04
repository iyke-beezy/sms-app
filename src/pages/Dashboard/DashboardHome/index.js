import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PlusOutlined } from '@ant-design/icons'
import {
    Tooltip,
    Statistic,
    Row,
    Col,
    Timeline,
    Progress,
    Popover,
    Button
} from 'antd'

import './styles.scss'

//actions

import { FormButton } from '../../../components/Forms'
import { setGroup, createGroup, } from './../../../redux/Dashboard/dashboard.actions'
import { Calendar, Badge } from 'antd';
import {Msgs} from '../../../components/DashboardComponents'

const mapState = ({ dashboard }) => ({
    currentGroup: dashboard.currentGroup,
    createGroupSuccess: dashboard.createGroupSuccess,
    createGroupError: dashboard.createGroupError
})



function getListData(value) {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
            ];
            break;
        case 10:
            listData = [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
                { type: 'error', content: 'This is error event.' },
            ];
            break;
        case 15:
            listData = [
                { type: 'warning', content: 'This is warning event' },
                { type: 'success', content: 'This is very long usual event。。....' },
                { type: 'error', content: 'This is error event 1.' },
                { type: 'error', content: 'This is error event 2.' },
                { type: 'error', content: 'This is error event 3.' },
                { type: 'error', content: 'This is error event 4.' },
            ];
            break;
        default:
    }
    return listData || [];
}
const DashboardHome = (props) => {

    function dateCellRender(value) {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.content}>
                        <Popover content={item.content} title="Title">
                            <Button type="primary">Hover me</Button>
                        </Popover>
                    </li>
                ))}
            </ul>
        );
    }

    function getMonthData(value) {
        if (value.month() === 8) {
            return 1394;
        }
    }

    function monthCellRender(value) {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    }


    return (
        <div className="DashboardHome">

            <div className="dashboard-content">

                <div className="container">
                    {/* Usage logs */}
                    <div className="logs">
                        <Timeline>
                            <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item color="red">
                                <p>Solve initial network problems 1</p>
                                <p>Solve initial network problems 2</p>
                                <p>Solve initial network problems 3 2015-09-01</p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <p>Technical testing 1</p>
                                <p>Technical testing 2</p>
                                <p>Technical testing 3 2015-09-01</p>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>

            </div>
                <Msgs />

        </div>
    )
}

export default DashboardHome