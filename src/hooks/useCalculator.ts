import { useRef, useState } from "react"

enum Operators {
    plus, substract, multiply, divide, calculate
}

export const useCalculator = () => {
    const [lastNumber, setLastNumber] = useState('0')
    const [number, setNumber] = useState('0')

    const lastOperator = useRef<Operators>()

    const clear = () => {
        setNumber('0')
        setLastNumber('0')
    }

    const buildNumber = ( digit: string ) => {

        if( digit === '.' && number.includes('.') ) return;

        if( number.startsWith('0') || number.startsWith('-0') ){
            if( digit === '.' ){
                setNumber( number + digit )
            }else if( digit === '0' && number.includes('.')){
                setNumber( number + digit )
            }else if( digit !== '0' && !number.includes('.')){
                setNumber( digit )
            }else if( digit === '0' && !number.includes('.') ){
                setNumber( number )
            }else{
                setNumber( number + digit )
            }
        }else{
            setNumber( number + digit )
        }

    }

    const btnDelete = () =>{

        let negative = ''
        let temNumber = number
        if( number.includes('-') ){
            negative = '-'
            temNumber = temNumber.substring(1)
        }

        if( temNumber.length == 1 ){
            setNumber('0')
        }else{
            setNumber( negative + temNumber.slice(0, -1) )
        }
    }

    const positiveNegative = () => {
        if( number.includes('-') ){
            setNumber( number.replace('-', '' ) );
        }else{
            setNumber( '-' + number )
        }
    }

    const swapLastWithNumber = () => {
        if( number.endsWith('.') ){
            setLastNumber( number.slice(0, -1) )
        }else{
            setLastNumber( number )
        }
        setNumber('0')
    }

    const btnPlus = () => {
        swapLastWithNumber()
        lastOperator.current = Operators.plus
    }
    const btnSubstract = () => {
        swapLastWithNumber()
        lastOperator.current = Operators.substract
    }
    const btnMultiply = () => {
        swapLastWithNumber()
        lastOperator.current = Operators.multiply
    }
    const btnDivide = () => {
        swapLastWithNumber()
        lastOperator.current = Operators.divide
    }

    const calculate = () => {
        const num1 = Number(lastNumber);
        const num2 = Number(number);

        switch ( lastOperator.current ) {
            case Operators.plus:
                setNumber( `${ num1 + num2 }` )
                break;
            case Operators.substract:
                setNumber( `${ num1 - num2 }` )
                break;
            case Operators.multiply:
                setNumber( `${ num1 * num2 }` )
                break;
            case Operators.divide:
                setNumber( `${ num1 / num2 }` )
                break;
        }

        setLastNumber('0')
        // lastOperator.current = Operators.calculate
    }

    return {
        number,
        lastNumber,
        clear,
        calculate,
        positiveNegative,
        btnDelete,
        buildNumber,
        btnDivide,
        btnMultiply, 
        btnPlus,
        btnSubstract
    }
}
