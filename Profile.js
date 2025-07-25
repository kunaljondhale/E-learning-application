import {  Text, View, StyleSheet } from 'react-native';
import React ,{ useContext }from 'react';
import { AuthContext } from '../context/authContext';
import FooterMenu from '../components/menu/FooterMenu';

const Profile = () => {
const [state] = useContext(AuthContext)
    return (
       <View style={styles.container}>
            <Text> NAME  : {state?.user.name} </Text>
            <Text> EMAIL : {state?.user.email} </Text>
            <Text> ROLE  : {state?.user.role} </Text>
            
          <View style={{flex:1,justifyContent:"flex-end"}}>
              <FooterMenu/>
         </View>
    </View>
   
  )
}

const styles = StyleSheet.create({
container:{
      flex:1,
      justifyContent: "space-between",
      margin: 10 ,
      margintop:40,
},

})
export default Profile;