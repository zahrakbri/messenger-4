// const saveNewMessage = {
//   type: 'SAVE_NEW_MESSAGE',
//   payload: 'salam'
// }

export const saveNewMessage = (newMessage) => ({
  type: 'SAVE_NEW_MESSAGE',
  payload: newMessage
})