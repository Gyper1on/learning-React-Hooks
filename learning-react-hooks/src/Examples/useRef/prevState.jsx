import React, {useRef,useState,useEffect} from "react";


const PrevStateExample = () => {
    const prevState = useRef('')
    const [otherState, setOtherState] = useState('false')
    const toggleOtherState  = () => {
        setOtherState(prevState  =>  {
            console.log('setOtherState' + prevState)
          return   prevState === 'false' ? 'true' : 'false'
        } )
    }
    useEffect(() => {
        console.log('useEffect' + otherState)
        prevState.current = otherState
        setOtherState(otherState === 'false' ? 'true' : 'false')

    },[])



    return (
        <>
            <h4>Предыдущее состояние</h4>
            <p> Prev State: {prevState.current}</p>
            <p> Current State: {otherState}</p>
            <button className='btn btn-primary ms-md-2' onClick={toggleOtherState}>Toggle other state</button>
        </>

    )
}

export default PrevStateExample