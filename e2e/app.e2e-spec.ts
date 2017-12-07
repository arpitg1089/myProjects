import { AngularTourOfHeroesPage } from './app.po';

describe('angular-tour-of-heroes App', function() {
  let page: AngularTourOfHeroesPage;

  beforeEach(() => {
    page = new AngularTourOfHeroesPage();
  });

  it('should display message saying new app', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('new app!');
  });
});
