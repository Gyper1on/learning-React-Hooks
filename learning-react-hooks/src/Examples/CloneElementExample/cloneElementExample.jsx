import React from "react";
import TextField from "../../common/form/textField";


const CloneElementExample = () => {

    const field = <TextField label = "email" name = "email"/>
    const handleChange = (target) => {
        console.log("change:", target)
    }

    return(
        <>
        <h1>Пример</h1>
            {field}
            {React.cloneElement(field, { onChange: handleChange, label: 'Clone Element'})}
        </>
    )
}

export default CloneElementExample