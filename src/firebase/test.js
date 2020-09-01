import React, { useState, useEffect } from 'react'
import { getGroups, updateGroup, getContacts } from './utils'
import { Select } from 'antd'


const TestFunction = props => {
    const [contacts, setContacts] = useState([])
    const [groups, setGroups] = useState()
    const [selectedContacts, setSelectedContacts] = useState([])
    const [selectedgroup, setSelectedgroup] = useState()


    const getGroupsFromUID = async () => {
        const uid = "FKieDURmFLcWKdsMICtxY9nsiQA3"

        //test getGroups
        try {
            const data = await getGroups(uid)
            //console.log(data)
            setGroups(data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const getContactsFromUID = async () => {
        const uid = "FKieDURmFLcWKdsMICtxY9nsiQA3"

        //get contacts
        try {
            const data = await getContacts(uid)
            setContacts(data)
        }
        catch (e) {
            console.log(e)
        }
    }

    const handleChange = (value) => {
        setSelectedContacts(value)
        groups.map(group => setSelectedgroup(group))
        //console.log(value)
    }

    const handleSelectGroup = value => {
        setSelectedgroup(value)
    }

    const updateGroupWithContact = async (e) => {
        e.preventDefault();
        
        console.log(selectedgroup)
        try {
            const response = await updateGroup(selectedgroup, selectedContacts)
            console.log(response)
        }
        catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        getGroupsFromUID()
        getContactsFromUID()
    }, [])

    return (
        <div>
            <form onSubmit={updateGroupWithContact}>
                {/* <Select
                    name="group"
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    onChange={handleChange}
                    style={{ width: '100%' }}
                >
                    {groups.map(group => <Select.Option key={group.id} value={group}>{group.name}</Select.Option>)}
                </Select> */}
                
                <Select
                    name="contact"
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    onChange={handleChange}
                    style={{ width: '100%' }}>
                    {contacts.map(contact => <Select.Option key={contact.id} value={contact.id}>{contact.name}</Select.Option>)}
                </Select>
                <button name="submit" type="submit">
                    submit
            </button>
            </form>
            <button onClick={getGroupsFromUID}>
                click me
            </button>
        </div>
    )
}

export default TestFunction