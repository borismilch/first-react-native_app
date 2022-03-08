import {  NavigationContainer  } from '@react-navigation/native'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { LoginScreen, RegisterScreen, HomeScreen, AddChatScreen, ChatScreen} from './src/views';
import React from 'react';
const Stack = createStackNavigator()

const screenOptions: StackNavigationOptions = {
  headerTitleAlign: "center", 
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: "rgb(32, 137, 220)"
  }
}

const homeScrenOptions: StackNavigationOptions = {
  title: "Signal", 
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: "white",
    
  }
}

const addChatScreenOptions: StackNavigationOptions = {
  title: "Add new Contact", 
  headerTitleAlign: "center",
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: "rgb(32, 137, 220)",
    borderBottomColor: "transparent"
  }
}

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen options={screenOptions} name="login" component={LoginScreen} />
        <Stack.Screen options={screenOptions} name="register" component={RegisterScreen} />
        <Stack.Screen options={homeScrenOptions} name="home" component={HomeScreen} />
        <Stack.Screen options={addChatScreenOptions} name="add_chat" component={AddChatScreen} />
        <Stack.Screen options={addChatScreenOptions} name="chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}