import { createSlice } from '@reduxjs/toolkit';

import * as ChannelsService from '../../services/channelsService'

export const channelsSlice = createSlice({
  name: 'channels',
  initialState: {
    joinedChannels: []
  },
  reducers: {
    updateJoinedChannels: (state, {payload}) => {
      state.joinedChannels = payload
    }
  },
});

export const {updateJoinedChannels} = channelsSlice.actions;

export const loadJoinedChannels = () => dispatch => {
  ChannelsService.joinedChannels().then(data => {
    dispatch(updateJoinedChannels(data))
  })
};

export const joinedChannels = state => state.channels.joinedChannels;

export default channelsSlice.reducer;
