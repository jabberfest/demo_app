import { schema } from 'normalizr';


export const channel = new schema.Entity('channels');
export const arrayOfChannels = new schema.Array(channel);

export const channelMessage = new schema.Entity('channel_messages');
export const arrayofChannelMessages = new schema.Array(channelMessage);