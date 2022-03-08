import { KeyboardAvoidingView, StyleSheet, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { useLayoutEffect } from 'react'
import { UserBadge } from '../components'
import { useAuthState } from '../hooks'
import { ChatActions } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Platform } from 'react-native'
import { SendingForm, Meesages } from '../components'

interface ChatScreenProps {
  navigation: any,
  route: any
}

const ChatScreen: React.FC<ChatScreenProps> = (props) => {
  
  const { navigation, route } = props
  const {user} = useAuthState()
  const {id: chatId, name, image} = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <UserBadge color="white" hasName={true} user={{avatar: image, name, email: ''}} />,
      headerRight: () => <ChatActions />,
      title: ""
    })

  }, [user])

  return (
    <SafeAreaView style={{height: "100%"}}>
      <StatusBar style='light' />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.wrapper}
        keyboardVerticalOffset={90}
      >
       <>
        <ScrollView style={styles.messages}>
           <Meesages chatId={chatId} />
        </ScrollView>

        <SendingForm chatId={chatId} />
       </>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, 
    height: "100%"
  },
  footer: {

  },

  input: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: "transparent",
    backgroundColor: "#ececec",
    borderWidth: 1,
    padding: 10,
    color: "gray",
    borderRadius: 30

  },
  messages: {
    flex: 1,
    height: "100%"
  }
})