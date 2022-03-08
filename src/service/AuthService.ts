import { auth, firestore } from "../lib/fireabse";
import { signInWithEmailAndPassword, signInWithRedirect, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { IUser } from "../models";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { allFieldsExists } from "../helpers";

const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3SP9J0aEXlOFCYirTLEwEglzR8GqN-rhIg&usqp=CAU'

export default abstract class AuthService {
  static async register (user: IUser) {

    if (allFieldsExists(user)) {
      console.log(user)
      alert("invalid user data",)
      return
    }
    try {
      const {user: newUser} = await createUserWithEmailAndPassword(auth, user.email, user.password!)
      .then(authUser => {
        updateProfile(authUser.user, {displayName: user.name, photoURL: user?.avatar || defaultImage})
        return authUser
      })
      const userRef = doc(firestore, "users", newUser.uid)
  
      return await setDoc(userRef, user)

    } catch (e) {
      alert(e)
    }
  }

  static async login (email: string, password: string) {
    if (!email || !password) {
      alert("invalid credentioals")
      return
    }
    try {
      const {user} = await signInWithEmailAndPassword(auth, email, password)
      const userRef = doc(firestore, "users", user.uid)
      const userData = await getDoc(userRef)
      return userData

    } catch (e) {
      alert(e)
    }
  }
}