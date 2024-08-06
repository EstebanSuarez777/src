import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';




const ScreenUser = () => {
    const navegacion = useNavigation()
  return (
    <View>
      <Text>Screen User</Text>
      <Button icon="eye-settings" mode="contained" onPress={()=>navegacion.navigate('detalles')}>
    Ver detalles
  </Button>

    </View>
  )
}

export default ScreenUser

const styles = StyleSheet.create({})