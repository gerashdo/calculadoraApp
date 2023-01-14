import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black',
        flex: 1,
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10, 
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: "right",
        marginBottom: 15
    },
    littleResult: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 25,
        textAlign: "right",
    },
    button: {
        borderRadius: 100,
        height: 80,
        justifyContent: 'center',
        marginHorizontal: 10,
        width: 80,
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: '400',
        textAlign: 'center',
    }
})