import { View, StyleSheet } from 'react-native'
import React from 'react'
import { IUser } from '../../models'
import { Avatar, Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

interface UserBadgeProps {
  user: IUser | null,
  onPress?: () => void,
  color?: string,
  hasName?: boolean
}

const UserBadge: React.FC<UserBadgeProps> = (props) => {
  const { 
    user, 
    onPress = () => {}, 
    color = "white", 
    hasName = false
  } = props

  return (
    <View style={styles.wrapper}>

      <TouchableOpacity>
        <MaterialIcons color={"white"} name='arrow-back' />
      </TouchableOpacity>   

      <Avatar 
        onPress={onPress} 
        source={{uri: user?.avatar}} 
        rounded
      />
      {hasName && <Text  style={{ fontWeight: "bold", color }}>{user?.name }</Text>}
    </View>
  )
}

export default UserBadge

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 20, 
    flexDirection: "row", 
    gap: "10px", 
    alignItems: "center" 
  },
  name: {fontWeight: "500", marginLeft: 6}
})