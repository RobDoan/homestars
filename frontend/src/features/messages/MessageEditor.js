import React from 'react';
import {useDispatch} from 'react-redux';
import {sendMessage} from './messageSlice'
import MessageInput from "../../components/MessageInput";

export default function MessageEditor({channel}) {
  const dispatch = useDispatch();
  const submitInputHandler = (message) => {
    dispatch(sendMessage(channel, message))
  }
  return <MessageInput onSubmitHanlder={submitInputHandler}/>
}
