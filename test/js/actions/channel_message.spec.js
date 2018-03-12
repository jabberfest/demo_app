import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as actions from 'react_app/chat/actions/channel_message';
import * as routes from 'js/phoenix-jsroutes';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)


describe('async channel message actions', () => {

    beforeEach(()=>{
      window.Gon = {assets: ()=> {return {csrf_token: "123"}}}
    })

    afterEach(()=>{
      fetchMock.reset()
      fetchMock.restore()
      window.Gon = undefined
    })

    it('creates ADD_CHANNEL_MESSAGE_SUCCESS when fetching channel messages has completed successfully', () => {
      const channelId= 1;

      const response = {
        "name":"John Doe",
        "message":"This is a message",
        "id":2,
        "avatar":"101"
      }

      fetchMock.postOnce(routes.channelChannelMessageCreate(channelId),
        response, {headers: {'content-type': 'application/json'}})
      

      const expectedActions = [
        {type: 'ADD_CHANNEL_MESSAGE_SUCCESS', response: {
          channelMessage: {
            "entities": {
              "channel_messages": {
                "2": {
                  "name": "John Doe",
                  "message": "This is a message",
                  "id": 2,
                  "avatar": "101"
                }
              }
            },
            "result": 2
          },
          channelId: channelId
        }}
      ]

      const store  = mockStore({channels:{activeChannel: channelId}})

      return store.dispatch(actions.createChannelMessage("foo")).then(()=>{
        expect(store.getActions()).toEqual(expectedActions)
      })


    })
})