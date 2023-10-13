import React, {useEffect, useRef, useState, useCallback} from "react";


const UseCallbackExample = () => {

    const [data, setData] = useState({})

    const withOutCallback = useRef(0)
    const withCallback = useRef(0)

    const handleChange = ({target}) => {
        setData(prevState => ({...prevState, [target.name]: target.value}))
    }


    const validateWithOutCallback = useCallback((data)=> {
        console.log(data)
    },[])
    const validateWithCallback = (data) => {
        console.log(data)
    }

    useEffect(() => {
        withOutCallback.current++
    }, [validateWithOutCallback])

    useEffect(() => {
        withCallback.current++
    }, [validateWithCallback])

    useEffect(() => {
        validateWithOutCallback(data)
        validateWithCallback(data)
    }, [data])

    return (
        <>
            <p> Render withoutCallback: {withOutCallback.current}</p>
            <p> Render withCallback: {withCallback.current}</p>
            <label htmlFor="email"
                   className=' form form-label'>
                Email
            </label>

            <input type="email"
                   className='form-control'
                   id='email'
                   onChange={handleChange}
                   value={data.email || ''}
                   name='email'/>
        </>
    )
}


export default UseCallbackExample