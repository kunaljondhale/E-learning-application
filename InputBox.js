import { View, Text ,TextInput,StyleSheet} from 'react-native'
import React from 'react'

const InputBox = ({
    
    inputTitle,
    keyboardType,
    autoComplete,
    secureTextEntry=false,
    value,
    setValue,




}) => {
  return (
    <View>
    
    <Text>{inputTitle}</Text>



    <TextInput 
    style={styles.inputBox}

    autoCorrect={false}
    keyboardType={keyboardType}
    autoComplete={autoComplete}
    secureTextEntry={secureTextEntry}
    value={value}
    onChangeText={(text) => setValue(text)}


    />




    </View>
  )
}

const styles = StyleSheet.create(
    {

    inputBox:{

        height:50,
        marginBottom:20,
        backgroundColor:"#EAF2F8",
        borderRadius:10,
        marginTop:10,
        paddingLeft:20,
        color:"#17202A",
        fontSize:20,

    },

    

}

)






export default InputBox