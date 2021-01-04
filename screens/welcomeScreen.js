import React from 'react';
import { StyleSheet, Text, View,TextInput ,TouchableOpacity ,Alert} from 'react-native';
import firebase from'firebase';
import db from '../config';
import SantaAnimation from '../components/santa';
export default class WelcomeScreen extends React.Component {
    constructor(){
        super();
        this.state={
            emailId:'',
            password:''
        }

    }
    userlogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
         return Alert.alert("Successfuly Login")
         
        })
   .catch((error)=>{
       var errorcode=error.code;
       var errormessage=error.errormessage
       return Alert.alert(errormessage)
   })
    }
    
    userSignup=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then((response)=>{
         return Alert.alert("user added successfuly")
         
        })
   .catch(function(error){
       var errorcode=error.code;
       var errormessage=error.errormessage
       return Alert.alert(errormessage)
   })
    }
  render(){
    return (
    <View style ={styles.container}>
    <View>  
        <SantaAnimation />
       <Text style={styles.heading}>Book Santa</Text>
    </View>
    <View>
        <TextInput 
        style={styles.loginbox}
        placeholder="abc@yahoo.com"
        keyboardType='email-address'
        onChangeText={(text)=>{
        this.setState({
            emailId:text
        })
        }}
        />
         <TextInput 
        style={styles.loginbox}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={(text)=>{
        this.setState({
            password:text
        })
        }}
        />
        <TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20}]}
        onPress={()=>{this.userlogin(this.state.emailId,this.state.password)}}
        >
<Text style={styles.buttonText}>login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={()=>{this.userSignup(this.state.emailId,this.state.password)}}
        >
<Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>


    </View>
    </View>

 );
 } 
}
const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      backgroundColor: "pink",
    },
    heading:{
        fontSize:60,
        fontWeight:'bold',
    paddingBottom:30,
      color:'red'
    },
    loginbox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor:'#ff8a65',
        fontSize:20,
        margin:10,
        paddingLeft:10 
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"yellow",
        shadowColor:"#000",
        shadowOffset:{width:0,height:8},
        shadowOpacity:0.30,
        shadowRadius:10.32,
        elevation:16
    }  ,
    buttonText:{
color:"blue",
fontWeight:'200',
fontSize:20
    }
  });
                              

