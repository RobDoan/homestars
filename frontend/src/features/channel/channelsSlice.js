import {createSlice} from '@reduxjs/toolkit';

import * as ChannelsService from '../../services/channelsService'

// Check if channel already exists in the channels list
function isExists(collection, e) {
  return !!collection.find((ch) => ch.id === e.id)
}

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
    },
    updateChannels: (state, {payload}) => {
      state.channels = payload
    },
    joinChannel: (state, {payload}) => {
      if (!isExists(state.joinedChannels, payload)) {
        state.joinedChannels = [payload, ...state.joinedChannels]
      }
    }
  },
});

export const {updateJoinedChannels, selectChannel, updateChannels} = channelsSlice.actions;

export const loadJoinedChannels = () => dispatch => {
  ChannelsService.joinedChannels().then(data => {
    dispatch(updateJoinedChannels(data))
  })
};

export const getChannels = () => dispatch => {
  ChannelsService.allChannels().then(data => {
    dispatch(updateChannels(data))
  })
}

export const joinChannel = (channel) => dispatch => {
  ChannelsService.joinChannel(channel)
    .then(data => {
      dispatch(channelsSlice.actions.joinChannel(data))
    })
}

export const joinedChannels = state => state.channels.joinedChannels;
export const currentChannel = state => state.channels.currentChannel;
export const allChannels = state => state.channels.channels;

export default channelsSlice.reducer;
