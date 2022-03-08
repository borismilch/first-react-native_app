import { View,  StyleSheet, TouchableOpacity  } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useLinkTo } from '@react-navigation/native'

const HomePageActions = () => {

  const linkTo = useLinkTo()

  const navigateToAddChatScreen = () => {
    return () => linkTo("/add_chat")
  }

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity activeOpacity={0.5} >
         <MaterialIcons name="camera-alt" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToAddChatScreen()} activeOpacity={0.5} >
        <MaterialIcons name="create" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default HomePageActions

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    width: 80,
    gap: "20px",
    marginRight: 10
    
  }
})