import React from 'react';
import { MultiChatWindow, MultiChatSocket, useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props:any) =>{
    const chatProps = useMultiChatLogic('d8cd1e27-d725-413a-9157-94cc5b7a155c', props.user.username, props.user.secret);
    return (
      <div style={{height:'100vh'}}>
         <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
         <MultiChatSocket {...chatProps} />
       
      </div>
    );
  }

  export default ChatsPage;