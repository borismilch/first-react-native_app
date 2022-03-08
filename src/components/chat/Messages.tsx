import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCollection } from '../../hooks'
import { firestore } from '../../lib/fireabse'
import { query, collection, orderBy } from 'firebase/firestore'
import { Message } from '.'
import { IMessage } from '../../models'

interface MessagesProps {
  chatId: string
}

const Messages: React.FC<MessagesProps> = (props) => {
  const { chatId } = props
  const messagesRef = query(collection(firestore, "chats", chatId, "messages"), orderBy("createdAt"))

  const [messages, loading] = useCollection<IMessage>(messagesRef)

  return (
    <View>
      {messages?.map(message => (
        <Message message={message} />
      ))}
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({})