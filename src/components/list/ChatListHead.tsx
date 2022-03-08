import React, { useEffect } from 'react'
import { ChatList } from './'
import { firestore } from '../../lib/fireabse'
import { collection } from 'firebase/firestore'
import { IChat } from '../../models'
import { Text } from 'react-native-elements'
import { query, orderBy } from 'firebase/firestore'
import { useCollection } from '../../hooks'

const ChatListHead = () => {
  const chatsRef = query(collection(firestore, "chats"), orderBy("createdAt"))
  const [chats] = useCollection(chatsRef)

  useEffect(() => {
    console.log(chats)
  }, [chats])

  return (
    <>
    {
      !(chats?.length || 0 < 0 )? <Text h2 style={{textAlign: "center"}} >Loading...</Text> :
       <ChatList chats={chats? chats as IChat[] : []} /> 
    }
    </>
  )
}

export default ChatListHead
