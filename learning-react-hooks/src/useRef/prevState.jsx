import React, {useRef,useState,useEffect} from "react";


const RenderCountExample = () => {
    const renderCount = useRef(0)
    const [otherState, setOtherState] = useState(false)
    const toggleOtherState  = () => {
        setOtherState(!otherState)
    }
    useEffect(() => {
        renderCount.current++
    })


    return (
        <>
            <h1>Предыдущее состояние</h1>
            {renderCount.current}
            <p> render count: {renderCount.current}</p>
            <button className='btn btn-primary' onClick={toggleOtherState}>Toggle other state</button>
        </>
    )
}

export default RenderCountExample