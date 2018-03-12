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
            },
            {
                "id": "20102644680046909",
                "online_at": "1620716707",
                "count": 1,
                "avatar": "https://graph.facebook.com/20102644680046909/picture?type=square",
                "name": "Bod Doe"
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
        let enzymeWrapper
        let props

        beforeEach(()=>{
            ({props, enzymeWrapper} = setup())
          })
      
        afterEach(()=>{
            enzymeWrapper.unmount()
        })

        it('should render itself and active users', ()=>{
            expect(enzymeWrapper.find('.active-user-count').exists()).toBe(true)
            expect(enzymeWrapper.find('.user').length).toBe(2)
        })

        it('should render the active users avatar images', ()=>{
            props.users.forEach(user => {
                expect(enzymeWrapper.find(`img[src="${user.avatar}"]`).length).toBe(1)
            });
        })

        it('should render the active users  first names', ()=>{
            props.users.forEach((user, index) =>{
                expect(enzymeWrapper.find('.users .user span')
                    .at(index).text())
                    .toBe(user.name.split(" ")[0])
            })
        })

        it('renders the custom scrollbar', ()=>{
            expect(enzymeWrapper.find('.custom-scroll').length).toBe(1)
        })
    })
})