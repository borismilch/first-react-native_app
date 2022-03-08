import { StyleSheet } from 'react-native'
import React from 'react'
import { ChatListItem } from './'
import { IChat } from '../../models'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

interface ChatListProps{
  chats: IChat[]
}

const ChatList: React.FC<ChatListProps> = (props) => {
  const { chats } = props
  
  return (
    <SafeAreaView>
      <ScrollView style={styles.wrapper} >
      {
        chats.map(chat => (
          <ChatListItem key={chat.id} chat={chat} />
        ))
      }
      </ScrollView>
    </SafeAreaView>
  )
  
}

export default ChatList

const styles = StyleSheet.create({
  wrapper: {
    height: "100%"
  }
})