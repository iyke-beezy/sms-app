import React from 'react'
import './styles.scss'

//ant-design components
import { Input } from 'antd';

const FormInput = ({handleChange, ...otherprops}) => {
    return (
        <div className="formRow">
            <Input size="large" onChange = {handleChange} {...otherprops} />
        </div>
    )
}

export default FormInput
