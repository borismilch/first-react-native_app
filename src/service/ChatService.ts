import { firestore } from "../lib/fireabse";
import { collection, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { IChat } from "../models";
import { serverTimestamp } from "firebase/firestore";

export default class ChatService {
  static async addNewChat (chat: IChat) {
    const chatRef = collection(firestore, "chats")

    return await addDoc(chatRef, {...chat, createdAt: serverTimestamp()})
  }

  static async deleteChat (chatId: string) {
    const chatRef = doc(firestore, "chats", chatId)

    return await deleteDoc(chatRef)
  }
}