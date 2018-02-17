import { schema } from 'normalizr';


export const channel = new schema.Entity('channels');
export const arrayOfChannels = new schema.Array(channel);

export const channelMessage = new schema.Entity('channel_messages');
export const arrayofChannelMessages = new schema.Array(channelMessage);


export const onlineUser = new schema.Entity('onlineUsers',{
    user: onlineUser
},{
    processStrategy: (value, parent, key) => {
        return {
            id: value.id,
            online_at: value.online_at,
            count: value.count,
            avatar: value.user.avatar,
            name: value.user.name
        };
    }
});

export const arrayofOnlineUsers = new schema.Array(onlineUser);