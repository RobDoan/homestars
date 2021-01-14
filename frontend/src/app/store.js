import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../features/authentication/authenticationSlice';
import channelsReducer from '../features/channel/channelsSlice';
import messagesReducer from '../features/messages/messageSlice';

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
    channels: channelsReducer,
    messages: messagesReducer,
  },
});
