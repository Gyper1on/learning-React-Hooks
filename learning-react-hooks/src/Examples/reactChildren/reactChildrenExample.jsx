import React, {useState} from "react";
import prevState from "../useRef/prevState";
import TextField from "../../common/form/textField";
import PropTypes from "prop-types";


const FormComponent = ({children}) => {
    const [data, setData] = useState({})
    // const handleChange = ( target) => {
    //     setData( prevState => ({...prevState, [target.name] : target.value}))
    // }

    return children
}

FormComponent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.oneOf(PropTypes.node),
    PropTypes.node])
}

const ReactChildrenExample = () => {
    return (
        <>
        <h1>Clone form and add props</h1>
            <TextField name='email' label = 'email'/>
            <TextField name='password' label = 'Пароль' type ='password'/>

        </>
    )
}

export default ReactChildrenExample