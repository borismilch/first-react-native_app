import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IMessage } from '../../models'
import { Avatar } from 'react-native-elements'
import { useAuthState } from '../../hooks'

interface MessageProps {
  message: IMessage
}

const Message: React.FC<MessageProps> = (props) => {
  const { message } = props
  const { user } = useAuthState()

  const styles = StyleSheet.create({
    body: {
      padding: 13,
      borderRadius: 24,
      backgroundColor: user?.uid === message.userId ? "#0284c7" : "#a1a1aa",
      flexDirection: "row"
    },
    name: {
      color: "white",
      fontWeight: "bold",
      fontSize: 13
    },

    time: {
      color: "white",
      opacity: .6,
      fontWeight: "bold",
      fontSize: 10
    },

  })

  return (
    <View style={styles.body}>
      <Avatar size={24} rounded source={{
        uri: message.userImage
      }} />

      <View>
        <Text style={styles.name}>{message.body}</Text>
        <Text style={styles.time}>{message.body}</Text>
      </View>
    </View>
  )
}

export default Message

