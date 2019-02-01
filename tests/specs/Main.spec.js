import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

describe('<FullHeader />', () => {
   it('should have a header tag when mount', () => {
       const wrapper = shallow(<FullHeader />);
       expect(wrapper.find('header')).to.have.length(1);
   });

   context('title', () => {
    it('should have a tag h1 when title is passed', () => {
        const wrapper = shallow(<FullHeader title='TDD' />);
        expect(wrapper.find('h1')).to.have.length(1);
    });

    it('should not have a tag h1 when title is not passed', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('h1')).to.have.length(0);
    });
    
    it('should have a tag h1 with title TDD when passed', () => {
        const wrapper = shallow(<FullHeader title='TDD' />)
        expect(wrapper.find('h1').props().children).to.be.equal('TDD');
    });
   });

   context('subtitle', () => {
        it('should have h2 tag when mount', () => {
            const wrapper = shallow(<FullHeader subtitle='JS course'/>);
            expect(wrapper.find('h2')).to.have.length(1);
        });

        it('should not have h2 tag when substitle is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h2')).to.have.length(0);
        });

        it('should have h2 tag when substitle is passed', () => {
            const wrapper = shallow(<FullHeader subtitle='JS course' />);
            expect(wrapper.find('h2').props().children).to.be.equal('JS course');
        });
   });




   it('should have h2 tag when mount', () => {
        //expect(wrapper.find('h2')).to.have.length(1);
    });
});
