import React, { useState } from 'react'
import { FormButton, FormInput } from '../../Forms'
import { Tooltip, Popover, Select } from 'antd'
import {
    PlusOutlined
} from '@ant-design/icons'
import './styles.scss'
import { useSelector } from 'react-redux'
const { Option } = Select


const mapState = ({ dashboard }) => ({
    groups: dashboard.groups
})

const Msgs = (props) => {
    //state variables
    const [visible, setVisisble] = useState(false)
    const [selectedGroups, setSelectedGroups] = useState(false)

    // const { groups } = useSelector(mapState)
    const groups = [
        {
            id: 1,
            name: 'test1'
        },
        {
            id: 2,
            name: 'test2'
        }
    ]

    const groupItems = []
    groups.map(group => {
        groupItems.push(
            <Option key={group.id}>{group.name}</Option>
        )
    })
    const content = (
        <div>
            <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Please select Groups"
                onChange={value => setSelectedGroups(value)}
            >
                {groupItems}
            </Select>
            <FormButton 
                
            />
        </div>
    );
    return (
        <div className="MessageBox">
            <div className="Messages">
                <div id="container">

                    <div className="msg-header">
                        <div id="row">
                            <h2>Messages</h2>
                            <Popover placement="bottom" title={<span>title</span>} content={content} trigger="click">
                                <Tooltip title="New Message">
                                    <FormButton icon={<PlusOutlined />} />
                                </Tooltip>
                            </Popover>

                        </div>


                    </div>

                    <div className="msgs">
                        <div className="row">
                            <h3>Group Name</h3>
                            <p>Message</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="msgForm">
                <form>
                    <FormInput
                        type="text"
                        name="Message"
                        placeholder="Send a message"
                        required={true}
                    // handleChange={e => setEmail(e.target.value)}
                    />


                </form>
            </div>
        </div>

    )
}

export default Msgs