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
            <h4>Отслеживание количества рендеров </h4>
            {renderCount.current}
            <p> render count: {renderCount.current}</p>
            <button className='btn btn-primary ms-md-2' onClick={toggleOtherState}>Toggle other state</button>
        </>
    )
}

export default RenderCountExample