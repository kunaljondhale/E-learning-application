import { View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import React ,{useState}from 'react';
import InputBox from '../../components/Forms/InputBox';
import SubmitButton from '../../components/Forms/SubmitButton';
import axios from 'axios';
const Register = ({navigation}) => {

    //states

const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [loading,setLoading]=useState(false);
///function

//btnfunction

const handleSubmit = async() => {

    try{
        setLoading(true)
if(!name||!email||!password){
 Alert.alert('please fill all fields');
setLoading(false);
return;
}

setLoading(false);
const {data} = await axios.post('/auth/Register',{name,email,password});
alert(data && data.message);
navigation.navigate("Login");
console.log('registerdata ==>',{name,email,password});
    
    }catch(error)
    {
      alert(error.response.data.message);
        setLoading(false);
        console.loglog("error");
    }

}



  return (
    <View style={styles.Container}>
    
      <Text style={styles.PageTitle}>Register</Text>
      <View style={{marginHorizontal:20}}>


     <InputBox inputTitle={"Name"}
     value={name}
     setValue={setName}
     />


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
     btnTitle="Register" 
     loading={loading}
     handleSubmit={handleSubmit}
     />
     <Text style={styles.linkText}>
     Already Register Please{" "}
     <Text style={styles.link}
     onPress={() => navigation.navigate("Login")}
     >LOGIN</Text>{" "}</Text>
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

export default Register