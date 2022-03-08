import React from 'react'
import { Avatar, ListItem } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import { IChat} from '../../models'
import { useRouter } from '../../hooks'
import { useNavigation } from '@react-navigation/native'

interface ChatListItemProps {
  chat: IChat
}

const ChatListItem: React.FC<ChatListItemProps> = (props) => {

  const { chat } = props
  const { navigateTo } = useRouter()
  const navigation = useNavigation()

  return (
    <ListItem onPress={() => navigation.navigate("chat" as never, chat as never )} bottomDivider>
      <Avatar 
        rounded
        source={{
          uri: chat.image
        }}
      />
      <ListItem.Content >
        <ListItem.Title style={styles.title}>
          {chat.name}
        </ListItem.Title>

        <ListItem.Subtitle style={styles.subtitle} numberOfLines={1}>
          this is a test
        </ListItem.Subtitle>

      </ListItem.Content>
    </ListItem>
  )
}

export default ChatListItem

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    color: "#121212",

  },
  subtitle: {
    fontWeight: "700",
  }
})