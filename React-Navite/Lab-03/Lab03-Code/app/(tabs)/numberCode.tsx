import { StyleSheet, Text, View, TextInput} from 'react-native'
import React, { useState, useRef } from 'react'


const numberCode = () => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
    const changeCode = (index, value) => {
        const copyArr = [...code];
        copyArr[index] = value;
        setCode(copyArr);

        if (value && index < code.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    }

    return (
        <View style={styles.container}>
            { code.map((digit, index) => (
                <View key={index}>
                    <TextInput
                        ref={(el) => (inputRefs.current[index] = el)}
                        style={styles.inputText}
                        value={digit}
                        onChangeText={(value) => changeCode(index, value)}
                        keyboardType="numeric"
                        maxLength={1}
                    ></TextInput>
                </View>
            )) 
            }
        </View>
    )
}

export default numberCode

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputText: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center',
        fontSize: 20,
    }
})