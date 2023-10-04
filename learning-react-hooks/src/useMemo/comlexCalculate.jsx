import React, {useEffect, useMemo, useState} from "react";


function factorial(n) {
    return n ? n * factorial(n - 1) : 1
}

function runFactorial(n) {
    console.log('run factorial')
    return factorial(n)
}
const ComplexCalculateExample = () => {

    const [value, setValue] = useState(100)
    const [otherState, setOtherState] = useState(false)

    useEffect(() => {
        console.log('render')
    })

    const buttonColor = otherState ? 'primary' : 'secondary'

    const fuct = useMemo(() => runFactorial(value), [value])

    return (
        <>
            <h4>Кэширование сложных вычислений</h4>
            <p>Value: {value}</p>
            <p>Result factorial: {fuct}</p>
            <button className='btn btn-primary ms-md-2'
                    onClick={() => setValue(prevState => prevState + 10)}>Increment
            </button>
            <button className='btn btn-primary ms-md-2'
                    onClick={() => setValue(prevState => prevState - 10)}>Decrement
            </button>
            <h4>Зависимость от сторонних setState</h4>
            <button className={'btn ms-mb-2 btn-' + buttonColor}
                    onClick={() => setOtherState((prevState) => !prevState)}> Изменение цвета кнопки
            </button>

        </>
    )
}

export default ComplexCalculateExample