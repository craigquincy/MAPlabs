import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

import Bracket from './Bracket'

Enzyme.configure( { adapter: new Adapter() } )
chai.use( chaiEnzyme() )

const shallow = Enzyme.shallow
const { expect } = chai 

const props = {
    prompts: ['Rich/Poor', 'Happy/Sad', 'Love/Hate'],
    question: {
        code: Math.floor( Math.random() * 100 ),
        text: 'How do you feel?'
    },
    onUpdateStoreCB: () => {}
}

describe( '<Bracket />', () => {
    let stub 
    
    beforeAll( () => {
        stub = sinon.stub( console, 'error' )
        stub.throwsArg( 0 )
    } )
    afterEach( () => {
        stub.resetHistory()
    } ) 

    it( 'requires a prompts prop', () => {
        expect( () => shallow( <Bracket /> ) ).to.throw( 'Warning: Failed prop type: The prop `prompts` is marked as required' )
    } )
    it( 'requires a question prop', () => {
        expect( () => shallow( <Bracket 
                                prompts={props.prompts}/> ) ).to.throw( 'Warning: Failed prop type: The prop `question` is marked as required' )
    } )
    it( 'requires an onUpdateStoreCB prop', () => {
        expect( () => shallow( <Bracket 
                                prompts={props.prompts} 
                                question={props.question}/> ) ).to.throw( 'Warning: Failed prop type: The prop `onUpdateStoreCB` is marked as required' )
    } )
    it( 'renders question.text in a p with id question.code',  () => {
        const wrapper = shallow( <Bracket {...props}/> )
        expect( wrapper.find( 'p#question' + props.question.code ) ).to.have.lengthOf( 1 )
    } )
    it( 'renders two children in a p with prompts class',  () => {
        const wrapper = shallow( <Bracket {...props}/> )
        expect( wrapper.find( 'p.prompts' ).children() ).to.have.lengthOf( 2 )
    } )
    it( 'handles click on first prompt and re-renders with second prompt replaced',  () => {
        const wrapper = shallow( <Bracket {...props}/> )
        const prompts = wrapper.find( '.prompts' )
        
        const firstChild = prompts.childAt( 0 )
        const secondChild = prompts.childAt( 1 )

        //check initial values of children
        expect( firstChild ).to.have.value( props.prompts[0] )
        expect( secondChild ).to.have.value( props.prompts[1] )
        
        //click first child 
        firstChild.simulate( "click", {} )

        //expect first child is still first child 
        expect( wrapper.find( '.prompts' ).childAt( 0 ) ).to.have.value( props.prompts[0] )
        //expect second child third prompt
        expect( wrapper.find( '.prompts' ).childAt( 1 ) ).to.have.value( props.prompts[2] )
    } )
    it( 'handles click on second prompt and re-renders with second prompt in place of first, and new prompt in place of second',  () => {
        const wrapper = shallow( <Bracket {...props}/> )
        const prompts = wrapper.find( '.prompts' )
        
        const firstChild = prompts.childAt( 0 )
        const secondChild = prompts.childAt( 1 )

        //check initial values of children
        expect( firstChild ).to.have.value( props.prompts[0] )
        expect( secondChild ).to.have.value( props.prompts[1] )
        
        secondChild.simulate( "click", {} )

        //expect first child is prior second child
        expect( wrapper.find( '.prompts' ).childAt( 0 ) ).to.have.value( props.prompts[1] )
        //expect second child is third prompt
        expect( wrapper.find( '.prompts' ).childAt( 1 ) ).to.have.value( props.prompts[2] )
    } )
} )