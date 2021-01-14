import { createSlice } from '@reduxjs/toolkit';

import * as MessagesSerice from '../../services/messagesService'

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    all: []
  },
  reducers: {
    setMessages: (state, {payload: messages}) => {
      state.all = messages
    },
    addMessage: (state, {payload: message}) => {
      console.info("AddMessage", message)
      state.all = [message, ...state.all]
    }
  },
});

export const {setMessages} = messagesSlice.actions;

export const loadMessages = channel => dispatch => {
  MessagesSerice.getMessages(channel).then(data => {
    dispatch(setMessages(data))
  })
};

export const sendMessage = (channel, message) => dispatch => {
  MessagesSerice.sendMessage(channel, message).then(data => {
    dispatch(messagesSlice.actions.addMessage(data))
  })
}

export const messages = state => state.messages.all

export default messagesSlice.reducer;
