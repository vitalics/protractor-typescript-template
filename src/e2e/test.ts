
import { browser, by } from 'protractor';
import { Reasons } from '../components/first';
import { Component, PureComponent } from 'components/component';

describe('angularjs homepage todo list', function () {
  it('should add a todo', async () => {
    await browser.get('https://angularjs.org/');

    const reasons = new Reasons();

    for await (const reason of reasons) {
      console.log('is component: ', Component.isComponent(reason));
      console.log('is pure component: ', PureComponent.isPureComponent(reason));
      console.log('header: ', await reason.getHeader());
      console.log('body: ', await reason.getBody());
    }

    expect(await reasons.getLength()).toBe(3);
  });
});
