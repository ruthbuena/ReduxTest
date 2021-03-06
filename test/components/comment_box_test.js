import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// Use describe to group together similar tests/typical mocha set up
describe ('CommentBox' , () => {
  let component;

  beforeEach( () => {
      component = renderComponent(CommentBox);
  });

  it('has the correct class' , () => {
    expect(component).to.have.class('comment-box');
  });

  // Use 'it' to test a single attribute of a target, 'it' blocks try to make
  // an assertion about a particular fact about the testing subject
  it('has a text area' , () => {
    // Use 'expect' to make an assertion/belief about a target
    // here is where chai jquery methods come in; helps for making assertions
    expect(component.find('textarea')).to.exist;
  });

  it('has a button' , () => {
    expect(component.find('button')).to.exist;
  });

describe ('entering some text', () => {
  beforeEach( () => {
    component.find('textarea').simulate('change', 'new comment');
  });

  it('shows that text is in the textarea' , () => {
    expect(component.find('textarea')).to.have.value('new comment');
  });

  it('when submitted, clears the input' , () => {
    component.simulate('submit');
    expect(component.find('textarea')).to.have.value('');
  });
});
});
