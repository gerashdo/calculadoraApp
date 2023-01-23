import { useRef, useState } from "react"

enum Operators {
    plus, substract, multiply, divide, calculate
}

export const useCalculator = () => {
    const [lastNumber, setLastNumber] = useState('0')
    const [number, setNumber] = useState('0')

    const lastOperator = useRef<Operators>()

    const clear = () => {
        setNumber( number => '0')
        setLastNumber( lastNumber => '0')
    }

    const buildNumber = ( digit: string ) => {

        if( digit === '.' && number.includes('.') ) return;

        if( number.startsWith('0') || number.startsWith('-0') ){
            if( digit === '.' ){
                setNumber( number => number + digit )
            }else if( digit === '0' && number.includes('.')){
                setNumber( number => number + digit )
            }else if( digit !== '0' && !number.includes('.')){
                setNumber( number => digit )
            }else if( digit === '0' && !number.includes('.') ){
                setNumber( number => number )
            }else{
                setNumber( number => number + digit )
            }
        }else{
            setNumber( number => number + digit )
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
            setNumber( number => '0')
        }else{
            setNumber( number => negative + temNumber.slice(0, -1) )
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
        if( lastNumber !== '0' ){
            calculateWithoutStop()
        }else{
            swapLastWithNumber()
        }
        lastOperator.current = Operators.plus
    }
    const btnSubstract = () => {
        if( lastNumber !== '0' ){
            calculateWithoutStop()
        }else{
            swapLastWithNumber()
        }
        lastOperator.current = Operators.substract
    }
    const btnMultiply = () => {
        if( lastNumber !== '0' ){
            calculateWithoutStop()
        }else{
            swapLastWithNumber()
        }
        lastOperator.current = Operators.multiply
    }
    const btnDivide = () => {
        if( lastNumber !== '0' ){
            calculateWithoutStop()
        }else{
            swapLastWithNumber()
        }
        lastOperator.current = Operators.divide
    }

    const calculateWithoutStop = () => {
        const num1 = Number(lastNumber);
        const num2 = Number(number);

        switch ( lastOperator.current ) {
            case Operators.plus:
                setLastNumber( `${ num1 + num2 }` )
                break;
            case Operators.substract:
                setLastNumber( `${ num1 - num2 }` )
                break;
            case Operators.multiply:
                setLastNumber( `${ num1 * num2 }` )
                break;
            case Operators.divide:
                setLastNumber( `${ num1 / num2 }` )
                break;
        }

        setNumber('0')
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

