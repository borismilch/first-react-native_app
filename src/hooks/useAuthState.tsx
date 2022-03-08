import React, { useEffect } from 'react'
import { auth } from '../lib/fireabse'
import { useState } from 'react'
import { IUser } from '../models'

interface returnType {
  user: IUser | null,
  userLoading: boolean,
  signout: () => Promise<void>
}

const useAuthState = (): returnType => {
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    if (auth?.currentUser) {
      const { displayName, email, photoURL, uid,  } = auth.currentUser
      const authUser = {name: displayName!, email: email!, avatar: photoURL!, uid: uid!}
      
      setUser(authUser)
    }
  }, [auth, setLoading])

  return { user, userLoading: loading, signout: auth.signOut  }
}

export default useAuthState