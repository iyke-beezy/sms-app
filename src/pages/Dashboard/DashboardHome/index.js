import React from 'react'
import './styles.scss'

import { FormButton } from '../../../components/Forms'

const DashboardHome = (props) => {
    return (
        <div className="DashboardHome">
            <h2>HomePage</h2>

            <div className="Header">
                <FormButton>
                    Generate Leads
                </FormButton>
                <FormButton>
                    Create Groups
                </FormButton>
                <FormButton>
                    Add Users
                </FormButton>
            </div>
        </div>
    )
}

export default DashboardHome