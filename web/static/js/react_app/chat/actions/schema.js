import { schema } from 'normalizr';


export const channel = new schema.Entity('channels');
export const arrayOfChannels = new schema.Array(channel);