import {channelMessagesByChannelById, channelMessagesByChannelId } 
    from 'react_app/chat/reducers/channel_message';


describe('channelMessagesByChannelById reducer', ()=>{
    it('should return the initial state',()=>{
        expect(channelMessagesByChannelById(undefined, {})).toEqual({})
    })

    it('should handle FETCH_CHANNEL_MESSAGES_SUCCESS', ()=>{
        expect(
            channelMessagesByChannelById({}, {
                type: 'FETCH_CHANNEL_MESSAGES_SUCCESS',
                response: {
                    "channelMessage": {
                      "entities": {
                        "channel_messages": {
                          "22": {
                            "name": "Fernando Arias Jr",
                            "message": "asdasd",
                            "id": 22,
                            "avatar": "10102644680046909"
                          }
                        }
                      },
                      "result": [
                        22
                      ]
                    },
                    "channelId": 16
                  }
            })
        ).toEqual({
            "16": {
              "22": {
                "name": "Fernando Arias Jr",
                "message": "asdasd",
                "id": 22,
                "avatar": "10102644680046909"
              }
            }
          })
    })
})