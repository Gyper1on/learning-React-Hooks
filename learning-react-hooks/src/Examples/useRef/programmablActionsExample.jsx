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
            <h4>Программируемые действия и свойства</h4>
            <label htmlFor="email" className=' form form-label'> Email</label>
            <input ref={inputRef} type="email" className='form-control' id='email'/>
            <button className='btn btn-primary ms-md-2' onClick={handleClick}>Focus input</button>
            <button className='btn btn-primary ms-md-2' onClick={handleClickWidth} > Изменить ширину</button>
                </>
                )
            }
            export default ProgrammablActionsExample