import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";


const LogOutButton = ({onLogOut}) => {
    useEffect(()=>{console.log('render button')})

    return <button className="btn btn-primary" onClick={onLogOut}></button>
}

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
}
const MemoWithUseCallbackExample = (prop) => {
    const [state, setUseState] = useState(false)

    const handleLogOut = () => {
        localStorage.removeItem('auth')
    }

    return <>
        <LogOutButton onLogOut={handleLogOut}/>
        <button className="btn btn-primary" onClick={onLogOut}></button>
    </>
}

export default MemoWithUseCallbackExample