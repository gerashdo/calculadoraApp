import React from 'react'
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc'
import { useCalculator } from '../hooks/useCalculator'
import { styles } from '../theme/appTheme'



export const CalculatorScreen = () => {

    const { 
        number, 
        lastNumber,
        clear,
        calculate,
        btnDelete,
        buildNumber,
        positiveNegative,
        btnDivide,
        btnMultiply,
        btnSubstract,
        btnPlus,
    } = useCalculator()

  return (
    <View style={ styles.calculatorContainer }>
        {
            lastNumber !== '0' && (
                <Text style={ styles.littleResult }>
                    { lastNumber }
                </Text>
            )
        }
        
        <Text 
            style={ styles.result }
            numberOfLines={ 1 }
            adjustsFontSizeToFit
        >
            { number }
        </Text>
        <View style={ styles.row }>
            <ButtonCalc text="C" buttonColor="#9B9B9B" action={ clear }/>
            <ButtonCalc text="+/-" buttonColor="#9B9B9B" action={ positiveNegative }/>
            <ButtonCalc text="del" buttonColor="#9B9B9B" action={ btnDelete }/>
            <ButtonCalc text="/" buttonColor="#FF9427" action={ btnDivide }/>
        </View>
        <View style={ styles.row }>
            <ButtonCalc text="7" action={ buildNumber }/>
            <ButtonCalc text="8" action={ buildNumber }/>
            <ButtonCalc text="9" action={ buildNumber }/>
            <ButtonCalc text="X" buttonColor="#FF9427" action={ btnMultiply }/>
        </View>
        <View style={ styles.row }>
            <ButtonCalc text="4" action={ buildNumber }/>
            <ButtonCalc text="5" action={ buildNumber }/>
            <ButtonCalc text="6" action={ buildNumber }/>
            <ButtonCalc text="-" buttonColor="#FF9427" action={ btnSubstract }/>
        </View>
        <View style={ styles.row }>
            <ButtonCalc text="1" action={ buildNumber }/>
            <ButtonCalc text="2" action={ buildNumber }/>
            <ButtonCalc text="3" action={ buildNumber }/>
            <ButtonCalc text="+" buttonColor="#FF9427" action={ btnPlus }/>
        </View>
        <View style={ styles.row }>
            <ButtonCalc text="0" expand action={ buildNumber }/>
            <ButtonCalc text="." action={ buildNumber }/>
            <ButtonCalc text="=" buttonColor="#FF9427" action={ calculate }/>
        </View>
    </View>
  )
}
