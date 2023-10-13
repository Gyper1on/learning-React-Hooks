import React from "react"




const  withPropsStyles =(Component) => (props) => {
    return (
        <>
        <Component {...props} name = 'new Name'/>

        </>
    )
}

export default withPropsStyles