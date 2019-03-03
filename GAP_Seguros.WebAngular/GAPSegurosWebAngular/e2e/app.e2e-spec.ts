import { GAPSegurosWebAngularPage } from './app.po';

describe('gapseguros-web-angular App', function() {
  let page: GAPSegurosWebAngularPage;

  beforeEach(() => {
    page = new GAPSegurosWebAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
