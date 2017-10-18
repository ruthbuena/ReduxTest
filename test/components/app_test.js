import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// Use describe to group together similar tests/typical mocha set up
describe('App' , () => {

  // Use 'it' to test a single attribute of a target, 'it' blocks try to make
  // an assertion about a particular fact about the testing subject
    it('shows the correct text', () => {

      // create an instance of App
      const component = renderComponent(App);

      // Use 'expect' to make an assertion/belief about a target
      expect(component).to.contain('React simple starter');




  });


});
