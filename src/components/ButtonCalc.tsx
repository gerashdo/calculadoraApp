import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    text: string;
    buttonColor?: string;
    expand?: boolean;
}

export const ButtonCalc = ( { text, buttonColor = "#2D2D2D", expand = false }: Props ) => {
  return (
    <TouchableOpacity>
        <View style={{ 
            ...styles.button, 
            backgroundColor: buttonColor,
            width: ( expand ) ? 180 : 80,
        }}>
            <Text style={{ 
                ...styles.buttonText,
                color: ( buttonColor === '#9B9B9B' ) ? 'black' : 'white',
                textAlign: ( expand ) ? 'left' : 'center',
                paddingHorizontal: ( expand ) ? 30 : 0,
            }}>{ text }</Text>
        </View>
    </TouchableOpacity>
  )
}
