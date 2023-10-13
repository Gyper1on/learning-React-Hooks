import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RenderCountExample from "./Examples/useRef/renderCount";
import PrevStateExample from "./Examples/useRef/prevState";
import ProgrammablActionsExample from "./Examples/useRef/programmablActionsExample";
import ComplexCalculateExample from "./Examples/useMemo/comlexCalculate";
import UseCallbackExample from "./Examples/useCallback/useCallbackExample";
import HOCExample from "./Examples/hoc/hocExample";
import MemoWithUseCallbackExample from "./Examples/memo/memoWithUseCallback";
import CloneElementExample from "./Examples/CloneElementExample/cloneElementExample";
import ReactChildrenExample from "./Examples/reactChildren/reactChildrenExample";


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
                <hr/>
                <h1>! React.Memo !</h1>
                <MemoWithUseCallbackExample/>
                <hr/>
                <h1>! React.CloneElement !</h1>
                <CloneElementExample/>
                <hr/>
                <h1>! React.Children !</h1>
                <ReactChildrenExample/>
        </>
    )
}

export default App