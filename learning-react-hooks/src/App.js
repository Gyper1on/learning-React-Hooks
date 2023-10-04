import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RenderCountExample from "./useRef/renderCount";
import PrevStateExample from "./useRef/prevState";
import ProgrammablActionsExample from "./useRef/programmablActionsExample";


const App = () => {
    return(
        <>
        <RenderCountExample/>
            <PrevStateExample/>
            <ProgrammablActionsExample/>
        </>
    )
}

export default App