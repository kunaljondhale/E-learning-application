import { View, StyleSheet } from 'react-native';
import React from 'react';
import FooterMenu from '../components/menu/FooterMenu';
import Ai from '../components/ai/Ai';



const Kai = () => {
 return (
    
   <View style={styles.container}>
      
     <View style={{ flex: 1, justifyContent: "flex-end" }}>
      
        <Ai/>
        <FooterMenu />
        </View>
    </View>
      
      
  )
}
const styles = StyleSheet.create({
container:{
      flex:1,
      justifyContent: "space-between",
        margin: 10,
    marginTop: 4,
      
},

})
export default Kai