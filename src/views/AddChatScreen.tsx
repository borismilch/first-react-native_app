import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Input, Button } from 'react-native-elements'
import { useInputValue } from '../hooks'
import { MaterialIcons } from '@expo/vector-icons'
import { ChatService } from '../service'
import { IChat } from '../models'

const defaultImage = "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg"

const AddChatScreen = () => {
  const [name, bindName, cleanName] = useInputValue()
  const [chatImage, bindChatImage, cleanImage] = useInputValue()

  const createNewChat = async () => {
    const newChat = { name, image: chatImage? chatImage : defaultImage }

    cleanName()
    cleanImage()

    await ChatService.addNewChat(newChat as IChat)
  }
  
  return (
    <View style={styles.wrapper}>

      <Input
        rightIcon={<MaterialIcons size={18} name='chat-bubble-outline' />} 
        style={styles.input} placeholder='chat name' 
        label={"Add chat name"} 
        {...bindName} 
      />

      <Input 
        rightIcon={<MaterialIcons size={18} name='image' />} 
        style={styles.input} 
        placeholder='chat preview image' 
        label={"Chat preview image"} 
        {...bindChatImage} 
      />

      <Button style={{width: 300}} title={"Add new Chat"} onPress={createNewChat} />

    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
   
    alignItems: "center",
  },
  input: {
    borderWidth: 0,
    paddingHorizontal: 5,
    width: "100%"
  },
  
})