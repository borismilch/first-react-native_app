import React, { useEffect } from 'react'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Image, Button, Input } from 'react-native-elements'
import { useInputValue, useKeyboardStatus } from '../hooks'
import { AuthService } from '../service'
import { auth } from '../lib/fireabse'

interface LoginScreenProps {
  navigation: any
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {

  const [email, bindEmail] = useInputValue()
  const [password, bindPassword] = useInputValue()
  const { isKeyboardVisible } = useKeyboardStatus()

  const goToRegister = () => {
    navigation.navigate("register")
  }

  const signIn = async () => {
    await AuthService.login(email, password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("home")
      } 
    })

    return unsubscribe 
  }, [])

  return (
    <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
     
      <StatusBar style='light' />

      <Image
       source={{
        uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
        }} 
        style={{
          marginTop: isKeyboardVisible ? 140 : 0,
          width: 200,
          height: 200
        }}
      />
      <View style={styles.inputContainer}>
        <Input 
          {...bindEmail}
          placeholder='Email' 
          autoFocus
          textContentType='emailAddress'
        />

        <Input 
          {...bindPassword}
          placeholder='Password' 
          autoFocus
          textContentType='password'
          secureTextEntry
        />
      </View>

      <Button onPress={signIn} containerStyle={styles.button} title="Login" />
      <Button onPress={goToRegister} containerStyle={styles.button} title="Register" type='outline' />
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

export default LoginScreen