import { connect } from 'react-redux'
import ChatBox from '../components/messenger/chatBox'

const mapStateToProps = (state) => {
  console.log('redux state:::', state)
  return {
    newMessageRedux: state.newMessage
  }
}

const ChatContainer = connect(mapStateToProps)(ChatBox)
export default ChatContainer