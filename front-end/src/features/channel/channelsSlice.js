import { createSlice } from '@reduxjs/toolkit';

import * as ChannelsService from '../../services/channelsService'

export const channelsSlice = createSlice({
  name: 'channels',
  initialState: {
    joinedChannels: [],
    channels: [],
    currentChannel: null
  },
  reducers: {
    updateJoinedChannels: (state, {payload}) => {
      state.joinedChannels = payload
      // set default channel is first joined channel
      state.currentChannel = state.joinedChannels[0]
    },
    selectChannel: (state, {payload: channelId}) => {
      const {joinedChannels} = state
      state.currentChannel = joinedChannels.find((channel) => channel.id === channelId)
    }
  },
});

export const {updateJoinedChannels, selectChannel} = channelsSlice.actions;

export const loadJoinedChannels = () => dispatch => {
  ChannelsService.joinedChannels().then(data => {
    dispatch(updateJoinedChannels(data))
  })
};

export const joinedChannels = state => state.channels.joinedChannels;
export const currentChannel = state => state.channels.currentChannel;

export default channelsSlice.reducer;
