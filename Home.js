import {  Text, View, StyleSheet } from 'react-native';
import React ,{ useContext }from 'react';
import { AuthContext } from '../context/authContext';
import FooterMenu from '../components/menu/FooterMenu';


const Home = () => {
    //global state
    const [state] = useContext(AuthContext)
  return (
    <View style={styles.container}>
      
      <Text>{JSON.stringify(state,null,4)}</Text>
      <FooterMenu/>
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

export default Home;

