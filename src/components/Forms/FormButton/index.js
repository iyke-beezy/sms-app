import React from 'react'
import './styles.scss'

//ant-design components
import { Button } from 'antd';

const FormButton = ({ children, ...otherProps }) => {
    return (
        <Button className = "btn" size="large" {...otherProps}>
            {children}
        </Button>
    )
}

export default FormButton