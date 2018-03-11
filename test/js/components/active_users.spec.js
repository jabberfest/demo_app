import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ActiveUsers from 'react_app/chat/components/active_users';


Enzyme.configure({adapter: new Adapter()})

function setup(){
    const props = {
        users: [
            {
              "id": "10102644680046909",
              "online_at": "1520716707",
              "count": 1,
              "avatar": "https://graph.facebook.com/10102644680046909/picture?type=square",
              "name": "Fernando Arias Jr"
            }
          ]
    }

    const enzymeWrapper = mount(<ActiveUsers {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', ()=>{
    describe('ActiveUsers', ()=>{
        it('should render itself and active users', ()=>{
            const { enzymeWrapper } = setup()

            expect(enzymeWrapper.find('.active-user-count').exists()).toBe(true)
        })
    })
})