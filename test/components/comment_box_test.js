import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// Use describe to group together similar tests/typical mocha set up
describe ('CommentBox' , () => {

  // Use 'it' to test a single attribute of a target, 'it' blocks try to make
  // an assertion about a particular fact about the testing subject
  it('has a text area' , () => {

      // create an instance of CommentBox
    const component = renderComponent(CommentBox);

    // Use 'expect' to make an assertion/belief about a target
    // here is where chai jquery methods come in; helps for making assertions
    expect(component.find('textarea')).to.exist;

  });

  it('has a button' , () => {

  });




});
