import React from 'react'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Image, Button, Input, Text } from 'react-native-elements'
import { useInputValue, useKeyboardStatus } from '../hooks'
import { useLayoutEffect } from 'react'
import { AuthService } from '../service'
import { IUser } from '../models'

interface RegisterScreenProps {
  navigation: any
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {

  const [email, bindEmail] = useInputValue()
  const [password, bindPassword] = useInputValue()
  const [name, bindName] = useInputValue()
  const [avatar, bindAvatar] = useInputValue()

  const { isKeyboardVisible } = useKeyboardStatus()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to login"
    })
  }, [navigation])

  const goToLoginScreen = () => {
    navigation.navigate("login")
  }

  const register = async () => {
    const user: IUser = {
      avatar,
      email,
      name,
      password
    }
    await AuthService.register(user)
  }

  return (
    <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
      <StatusBar style='light' />

      <View style={styles.inputContainer}>

        <Text 
          style={{textAlign: "center", marginBottom: 15, marginTop: isKeyboardVisible ? 160 : 0}} 
          h3  
        >
          Create new Account</Text>

        <Input 
        
          {...bindName}
          placeholder='Name' 
        />

        <Input 
          {...bindEmail}
          placeholder='Email' 
          textContentType='emailAddress'
        />

        <Input 
          {...bindPassword}
          placeholder='Password' 
          textContentType='password'
          secureTextEntry
        />

        <Input 
          {...bindAvatar}
          placeholder='Avatar url' 
          
        />
      </View>

      <Button onPress={register} containerStyle={styles.button} title="Register" />
      <Button onPress={goToLoginScreen} containerStyle={styles.button} title="Login" type='outline' />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    width: 300
  },
  button: {
    width: 200,
    marginTop: 10
  }
})

export default RegisterScreen