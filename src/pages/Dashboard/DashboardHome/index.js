import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './styles.scss'

//actions

import { FormButton } from '../../../components/Forms'
import { setGroup, createGroup, } from './../../../redux/Dashboard/dashboard.actions'

const mapState = ({ dashboard }) => ({
    currentGroup: dashboard.currentGroup,
    createGroupSuccess: dashboard.createGroupSuccess,
    createGroupError: dashboard.createGroupError
})

const DashboardHome = (props) => {
    return (
        <div className="DashboardHome">

            <div className="Header">
                <div className="leads">
                    <FormButton>
                        Generate Leads
                </FormButton>
                </div>

                {/* <FormButton>
                    Create Groups
                </FormButton>
                <FormButton>
                    Add Users
                </FormButton> */}
            </div>

            <div className="dashboard-content">

                {/* Credit amount */}
                <div className="balance">
                    <div className="balance-content">

                    </div>
                </div>


                {/* Usage logs */}
                <div></div>

            </div>
        </div>
    )
}

export default DashboardHome