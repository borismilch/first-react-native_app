export interface IMessage {
  body: string,
  username: string,
  userImage: string,
  createdAt: { seconds: number },
  id: string,
  userId: string

}