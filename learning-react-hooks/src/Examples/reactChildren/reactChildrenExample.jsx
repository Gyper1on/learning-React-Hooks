import React, {useEffect, useState} from "react";
import TextField from "../../common/form/textField";
import PropTypes from "prop-types";


const FormComponent = ({children}) => {
    const [data, setData] = useState({})
    useEffect(() => {
        console.log(data)}, [data])
    const handleChange = ( target) => {
        setData( prevState => ({...prevState, [target.name] : target.value}))
    }


    return  React.Children.map( children,(child) => {
        const config = {...child.props,
            onChange: handleChange,
            value: data[child.props.name] || ''
        }

        return   React.cloneElement(child, config)
    })
}

FormComponent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node),
    PropTypes.node])
}

const ReactChildrenExample = () => {
    return (
        <>
        <h1>Clone form and add props</h1>
            <FormComponent>
            <TextField name='email' label = 'email'/>
            <TextField name='password' label = 'Пароль' type ='password'/>
            </FormComponent>
        </>
    )
}

export default ReactChildrenExample