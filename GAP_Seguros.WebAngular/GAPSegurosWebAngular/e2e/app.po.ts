import { browser, element, by } from 'protractor';

export class GAPSegurosWebAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
