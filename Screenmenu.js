import {StyleSheet} from 'react-native'
import React ,{useContext}from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/Home';
import Register from '../../screens/auth/Register';
import Login from '../../screens/auth/Login';
import { AuthContext } from '../../context/authContext';
import HeaderMenu from './HeaderMenu';
import post from '../../screens/post';
import Kai from '../../screens/Kai';
import Profile from '../../screens/Profile';




const Screenmenu = () => {

    //global state

const [state] = useContext(AuthContext)

//auth condition true user

const authenticatedUser = state?.user && state?.token 




    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login">

{authenticatedUser ? 
    (
    
     <> 
     <Stack.Screen
     name ="Home"  
     component={Home} 
     options={{
    title:"Learners",
    headerRight: ()=> <HeaderMenu/> }}
            />
            

     <Stack.Screen
     name ="post"  
     component={post} 
     options={{
   headerBackTitle: "back",
    headerRight: ()=> <HeaderMenu/> }}
            />
            
     <Stack.Screen
     name ="kai"  
     component={Kai} 
     options={{
   headerBackTitle: "back",
    headerRight: ()=> <HeaderMenu/> }}
            />  


     <Stack.Screen
     name ="Profile"  
     component={Profile} 
     options={{
   headerBackTitle: "back",
    headerRight: ()=> <HeaderMenu/> }}
     />         
    </>
    ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
        </>
      )
    
 }
    </Stack.Navigator>
  );
};
  
export default Screenmenu;