import { StyleSheet, View, Alert } from 'react-native'
import { Text, TextInput, Button, IconButton } from 'react-native-paper';
import React, { useState } from 'react';
import ModelUser from './ModelUser';


const Loginp2 = () => {


  const [user, onChageUser]= useState("");
  const[password, OnChagePass]= useState('');
  const[verpassword, SetVerPassword] = useState(true);
  
 
  const IngresarUsuario = ()=>{
    if (user === ''){
      Alert.alert('El campo de usuario no debe de estar vacio')
    }if (password === ''){
      Alert.alert('El campo de password no debe de estar vacio')
    }else{
      Alert.alert(user,password)
    }      
  }



  return (
    <View style={styles.contenedoorpricipal}>
    

 <Text style={{textAlign:'center'}} variant="displayLarge">Hola</Text>
   <Text style={{textAlign:'center'}} variant="headlineLarge">Iniciar sesion</Text>

      <View style={styles.contenedorinput}>
        <TextInput
        style={{marginTop: 10}}
        label="Usuario"
        value={user}
        onChangeText={onChageUser}
        keyboardType='text'/>

        <TextInput
        style={{marginTop: 10}}
        value={password}
        label="Password"
        onChangeText={OnChagePass}
        secureTextEntry={verpassword}
        right={<TextInput.Icon icon="eye" onPress={()=>SetVerPassword(!verpassword)}/>}
        />

        <Button 
        theme={{ colors: { primary: '#C469D8'}}} 
        style={{marginTop:20}} 
        icon="login" 
        mode="contained" 
        onPress={IngresarUsuario}>
    Ingresar
  </Button>
      </View>
      
    <ModelUser
 
    />
    </View>
  )
}

export default Loginp2

const styles = StyleSheet.create({
  contenedoorpricipal:{
    marginTop:150,
    padding:10,
    justifyContent:"center",
    flex:1,
    textAlign:"center",
   
  },

  contenedorinput:{
padding:25
  }

})