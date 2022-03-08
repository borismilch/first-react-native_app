import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'

import { FontAwesome, Ionicons } from '@expo/vector-icons'

const ChatActions = () => {
  return (
    <View style={styles.wrapper}>

     <TouchableOpacity>
       <FontAwesome size={24}  name='video-camera' color={"white"} />
     </TouchableOpacity>

     <TouchableOpacity>
       <Ionicons size={24} name='call' color={"white"} />
     </TouchableOpacity>
     
    </View>
  )
}

export default ChatActions

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    gap: "20px",
    paddingHorizontal: 20

  }
})