import React, {useRef,useState,useEffect} from "react";


const PrevStateExample = () => {
    const prevState = useRef('')
    const [otherState, setOtherState] = useState('false')
    const toggleOtherState  = () => {
        setOtherState(prevState => prevState === 'false' ? 'true' : 'false')
    }
    useEffect(() => {
        prevState.current = otherState
    },[otherState])



    return (
        <>
            <h1>Предыдущее состояние</h1>
            <p> Prev State: {prevState.current}</p>
            <p> Current State: {otherState}</p>
            <button className='btn btn-primary' onClick={toggleOtherState}>Toggle other state</button>
        </>

    )
}

export default PrevStateExample