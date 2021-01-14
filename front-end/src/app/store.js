import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../features/authentication/authenticationSlice';
import channelsReducer from '../features/channel/channelsSlice';

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
    channels: channelsReducer,
  },
});
