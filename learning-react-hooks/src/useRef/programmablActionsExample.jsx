import React, {useRef} from "react";





const ProgrammablActionsExample = () => {

    const inputRef = useRef()

    const handleClick = () => {
        console.log(inputRef.current)
        inputRef.current.focus()
    }
    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    }

    return (
        <>
            <h1>Программируемые действия и свойства</h1>
            <label htmlFor="email" className=' form form-label'> Email</label>
            <input ref={inputRef} type="email" className='form-control' id='email'/>
            <button className='btn btn-primary' onClick={handleClick}>Focus input</button>
            <button className='btn btn-primary' onClick={handleClickWidth} > Изменить ширину</button>
                </>
                )
            }
            export default ProgrammablActionsExample