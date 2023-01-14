import React from 'react'
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc'
import { styles } from '../theme/appTheme'


export const CalculatorScreen = () => {
  return (
    <View style={ styles.calculatorContainer }>
        <Text style={ styles.littleResult }>
            1,500.00
        </Text>
        <Text style={ styles.result }>
            1,500.00
        </Text>
        <View style={ styles.row }>
            <ButtonCalc text="C" buttonColor="#9B9B9B"/>
            <ButtonCalc text="+/-" buttonColor="#9B9B9B"/>
            <ButtonCalc text="del" buttonColor="#9B9B9B"/>
            <ButtonCalc text="/" buttonColor="#FF9427"/>
        </View>
        <View style={ styles.row }>
            <ButtonCalc text="7"/>
            <ButtonCalc text="8"/>
            <ButtonCalc text="9"/>
            <ButtonCalc text="X" buttonColor="#FF9427"/>
        </View>
        <View style={ styles.row }>
            <ButtonCalc text="4"/>
            <ButtonCalc text="5"/>
            <ButtonCalc text="6"/>
            <ButtonCalc text="-" buttonColor="#FF9427"/>
        </View>
        <View style={ styles.row }>
            <ButtonCalc text="1"/>
            <ButtonCalc text="2"/>
            <ButtonCalc text="3"/>
            <ButtonCalc text="+" buttonColor="#FF9427"/>
        </View>
        <View style={ styles.row }>
            <ButtonCalc text="0" expand />
            <ButtonCalc text="."/>
            <ButtonCalc text="=" buttonColor="#FF9427"/>
        </View>
    </View>
  )
}
