import {MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';


const Chatspage = (props) => {

  const chatProps = useMultiChatLogic
  ('4ec6cf29-f81b-4485-b9b8-fa8d5f15869c',
   props.user.username,
    props.user.secret
);

  return   <div style={{height: '100vh'}}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps} style={{height: '100%'}} />

  </div>
}

export default Chatspage;