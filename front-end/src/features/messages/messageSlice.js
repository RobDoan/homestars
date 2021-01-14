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
    }
  },
});

export const {setMessages} = messagesSlice.actions;

export const loadMessages = channel => dispatch => {
  console.info(channel)
  MessagesSerice.getMessages(channel).then(data => {
    dispatch(setMessages(data))
  })
};

export const messages = state => state.messages.all

export default messagesSlice.reducer;
