import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// Use describe to group together similar tests/typical mocha set up
describe('App' , () => {
  let component;

  beforeEach( () => {
    component = renderComponent(App);
  });

  // Use 'it' to test a single attribute of a target, 'it' blocks try to make
  // an assertion about a particular fact about the testing subject
    it('shows a comment box', () => {
      // Use 'expect' to make an assertion/belief about a target
      expect(component.find('.comment-box')).to.exist;
  });

    it('shows a comment list', () => {
      expect(component.find('.comment-list')).to.exist;
    });
});
