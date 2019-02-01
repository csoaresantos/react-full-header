import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme());

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

   context('bgColor', () => {
    it('should have a background-color equal #ccc when none is passed', () => {
        const wrapper = shallow(<FullHeader title='TDD' />);
        expect(wrapper).to.have.style('background-color').equal('#ccc');
    });

    it('should have a background-color equal #ddd', () => {
            const wrapper = shallow(<FullHeader title='TDD' bgColor='#ddd' />);
            expect(wrapper).to.have.style('background-color').equal('#ddd');
    });
   });

   context('textColor', () => {
    it('should have a text-color equal #fff when none is passed', () => {
        const wrapper = shallow(<FullHeader title='TDD' />);
        expect(wrapper).to.have.style('color').equal('#fff');
    });

    it('should have a text-color equal #fff000', () => {
            const wrapper = shallow(<FullHeader title='TDD' textColor='#fff000' />);
            expect(wrapper).to.have.style('color').equal('#fff000');
    });
   });

   context('fontFamily', () => {
    it('should have a font equal sans-serif when none is passed', () => {
        const wrapper = shallow(<FullHeader title='TDD' />);
        expect(wrapper).to.have.style('font-family').equal('sans-serif');
    });

    it('should have a font equal open-sans when passed', () => {
        const wrapper = shallow(<FullHeader title='TDD' font='open-sans' />);
        expect(wrapper).to.have.style('font-family').equal('open-sans');
    });
  });
});
