import React from "react";


const withLogin = (Component) => (props) => {
    const isLogin = localStorage.getItem('auth')
    return (
        <>
            {isLogin ? <Component {...props}/> : <p>Auth</p>}
        </>
    )
}

export default withLogin