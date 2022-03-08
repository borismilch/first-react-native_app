import { IMessage } from "../models";

import { collection, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore'
import { firestore } from "../lib/fireabse";

export default class MessageService {
  static async sendMessages(chatId: string, message: IMessage) {
    const fireref = collection(firestore, "chats", chatId, "messages")

    return await addDoc(fireref, message)
  }

  static async deleteMessage(chatId: string, messageId: string) {
    const fireref = doc(firestore, "chats", chatId, "messages", messageId)

    return await deleteDoc(fireref)
  }
}