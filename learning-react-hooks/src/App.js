import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RenderCountExample from "./useRef/renderCount";
import PrevStateExample from "./useRef/prevState";
import ProgrammablActionsExample from "./useRef/programmablActionsExample";
import ComplexCalculateExample from "./useMemo/comlexCalculate";
import UseCallbackExample from "./useCallback/useCallbackExample";
import HOCExample from "./hoc/hocExample";


const App = () => {
    return (
        <>
            <h1>! useRef !</h1>
            <RenderCountExample/>
            <PrevStateExample/>
            <ProgrammablActionsExample/>
            <hr/>
            <h1>! useMemo !</h1>
            <ComplexCalculateExample/>
            <hr/>
            <h1>! useCallback !</h1>
            <UseCallbackExample/>
            <hr/>
            <h1>! HOC !</h1>
            <HOCExample/>
        </>
    )
}

export default App