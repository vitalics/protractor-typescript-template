
import { browser, element } from 'protractor';
import { Reason, Reasons } from '../components/first';
import { Collection } from '../components/collection';

describe('angularjs homepage todo list', function () {
  it('should add a todo', async () => {
    await browser.get('https://angularjs.org/');
    browser.waitForAngularEnabled(false);

    const reasons = new Reasons();

    for await (const reason of reasons) {
      console.log('header: ', await reason.getHeader());
      console.log('body: ', await reason.getBody());
    }

    expect(await reasons.getLength()).toBe(3);
  });
});
