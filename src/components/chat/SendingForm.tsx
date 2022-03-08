import { StyleSheet,  View, TextInput} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useAuthState, useInputValue } from '../../hooks'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Keyboard } from 'react-native'
import { MessageService } from '../../service'
import { IMessage } from '../../models'
import { serverTimestamp } from 'firebase/firestore'

interface SendingFormProps {
  chatId: string
}

const SendingForm: React.FC<SendingFormProps> = (props) => {
  const { chatId = '' } = props
  const [message, bindMessage, cleanMessage] = useInputValue()
  const { user } = useAuthState()
  
  const sendMessage = () => {
    if (!message) { return }
    Keyboard.dismiss()
    cleanMessage()

    const newMessage: IMessage = {
      body: message,
      createdAt: serverTimestamp() as any,
      userImage: user?.avatar + "",
      username: user?.name + '',
      id: "",
      userId: user!.uid + ''
    }

    MessageService.sendMessages(chatId, newMessage)
  }

  return (

    <View style={styles.form}>
      <TextInput 
        onSubmitEditing={sendMessage}
        placeholder='Signal message' 
        style={styles.input}
        {...bindMessage}
      />
      <TouchableOpacity onPress={sendMessage}>
        <Ionicons name="send" size={24} color="#2B68E6" />
      </TouchableOpacity>
    </View>
  )

}

export default SendingForm

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15
  },
  input: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    backgroundColor: "#ececec",
    padding: 10,
    color: "gray",
    borderRadius: 30
  }
})
