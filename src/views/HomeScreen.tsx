import { ScrollView, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChatList, UserBadge, HomePageActions } from '../components'
import { useAuthState } from '../hooks'
import { auth } from '../lib/fireabse'
import { ChatListHead } from '../components/list'

interface HomeScreenProps {
  navigation: any
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {

  const { user, userLoading } = useAuthState()

  const signOut = async () => {
    auth.signOut()
    navigation.navigate("login")
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <UserBadge onPress={signOut} user={user} />,
      headerRight: () => <HomePageActions />
    })

  }, [user])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >

        <ChatListHead />

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
   
  }
})