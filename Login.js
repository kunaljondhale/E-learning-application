import { View, Text, StyleSheet, Alert} from 'react-native';
import React ,{useState,useContext}from 'react';
import { AuthContext } from '../../context/authContext';
import InputBox from '../../components/Forms/InputBox';
import SubmitButton from '../../components/Forms/SubmitButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Login = ({navigation}) => {


  // global state

  const[state,setState] = useContext(AuthContext)
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loading,setLoading]=useState(false);
    ///function
    
    //btnfunction
    
    const handleSubmit =async() => {
    
        try{
            setLoading(true)
    if( !email||!password){
     Alert.alert('please fill all fields');
    setLoading(false);
    return;
    }
    setLoading(false);
    const {data} = await axios.post('/auth/Login',{email,password});

    setState(data)
    await AsyncStorage.setItem("@auth", JSON.stringify(data));
alert(data && data.message);

navigation.navigate("Home");
    console.log('Logindata ==>',{email,password})
      
        }catch(error)
        {
          alert(error.response.data.message);
            setLoading(false);
            console.log("error");
        }
    
    }
    
    
    ///temporary function to check local storage data

    const getLocalStorageData = async() => {
      let data = await AsyncStorage.getItem("@auth");
      console.log('local storage ==> ', data);
    }
    getLocalStorageData();
      return (
        <View style={styles.Container}>
        
          <Text style={styles.PageTitle}>Login</Text>
          <View style={{marginHorizontal:20}}>
    
    
         
         <InputBox inputTitle={"Email"}
    
         keyboardType={"email-address"}
         autoComplete="email"
         value={email}
         setValue={setEmail}
         
         
         />
         <InputBox inputTitle={"Password"}
    
           secureTextEntry={true}
           autoComplete="password"
           value={password}
           setValue={setPassword}
         
         
         />
    
      
          
          </View>
         {/*<Text>{JSON.stringify({name,email,password},null,4)}</Text>*/}
    
         <SubmitButton 
         btnTitle="Login" 
         loading={loading}
         handleSubmit={handleSubmit}
         />
         <Text style={styles.linkText}>Not a user please {" "}
          <Text style={styles.link} 
          onPress={() => navigation.navigate("Register")}
          >
          Register</Text>{" "}</Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create(
        {
        Container :{
    
    
            flex:1,
            justifyContent:"center",
            backgroundColor:"#87ceeb",
            
    
    
        },
        PageTitle:{
            fontSize:40,
            textAlign:"center",
            fontWeight:"bold",
            color:"#7B241C",
            marginTop:20,
    
    
        },
       
        linkText:{
    
          textAlign:"center",
    
        },
        
        link:{
    
        color:"red"
    
        }
    
    }
    
    )

    export default Login;