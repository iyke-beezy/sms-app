import React, { useState, useEffect } from 'react'
import { getGroups, updateGroup, getContacts, addContacts, addGroups } from './utils'
import { Select } from 'antd'
import { FormInput } from './../components/Forms'
import CSVReader from 'react-csv-reader'


const TestFunction = props => {
    const [contacts, setContacts] = useState([])
    const [newContacts, setNewContacts] = useState()
    const [groups, setGroups] = useState()
    const [groupName, setGroupName] = useState('')
    const [selectedContacts, setSelectedContacts] = useState([])
    const [selectedgroup, setSelectedgroup] = useState()
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [oname, setOname] = useState()
    const [phone, setPhone] = useState()


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
            console.log(data)
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

    const newContact = async (e) => {
        e.preventDefault()
        try {
            const data = await addContacts({
                fname,
                lname,
                oname,
                phone,
                user_id: "FKieDURmFLcWKdsMICtxY9nsiQA3"
            })
            console.log(data)
        }
        catch (e) {
            console.log(e)
        }
    }

    const newGroup = async (e) => {
        e.preventDefault()
        //console.log(contacts)
        try {
            const data = await addGroups({
                name: groupName,
                contacts: newContacts
            }, {user_id : "FKieDURmFLcWKdsMICtxY9nsiQA3"})
            console.log(data)
        }
        catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getGroupsFromUID()
        getContactsFromUID()
    }, [])

    const papaparseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: 'greedy',
        transformHeader: header =>
            header
                .toLowerCase()
                .replace(/\W/g, '_')
    }

    const onFileLoaded = data => {
        setNewContacts(data)
    }

    return (
        <div>
            <form onSubmit={newGroup}>
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
                {/*                 
                <Select
                    name="contact"
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    onChange={handleChange}
                    style={{ width: '100%' }}>
                    {contacts.map(contact => <Select.Option key={contact.id} value={contact.id}>{contact.name}</Select.Option>)}
                </Select> */}


                <FormInput
                    type="text"
                    name="groupName"
                    placeholder="Group Name"
                    handleChange={e => setGroupName(e.target.value)}
                />
                <CSVReader
                    label="Upload contacts with format, CSV ."
                    // onFileLoaded={handleForce}
                    // onError={handleDarkSideForce}
                    parserOptions={papaparseOptions}
                    onFileLoaded={onFileLoaded} />
                {/* <FormInput
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    handleChange={e => setPhone(e.target.value)}
                /> */}
                <button name="submit" type="submit">
                    submit
            </button>
            </form>
            <button onClick={getContactsFromUID}>
                click me
            </button>

        </div>
    )
}

export default TestFunction