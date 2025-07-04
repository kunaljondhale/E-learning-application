import { View,TouchableOpacity,StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from "@react-native-async-storage/async-storage";

const HeaderMenu = () => {

    const [state, setState] = useContext(AuthContext);


    const handleLogout = async () => {
        setState({ token: '', user: null })
        await AsyncStorage.removeItem('@auth')
        alert('Logout Successfully');
        
    }
  return (
    <View>
          <TouchableOpacity onPress={handleLogout}>
            <FontAwesome5 name ="sign-out-alt" color={"red"} style ={styles.iconstyle}/>
           </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
    
    

    iconstyle: {
        marginBottom: 3,
        alignSelf: "center",
        fontSize: 25,


    }
})
export default HeaderMenu;