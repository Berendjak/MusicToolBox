import { MusictoolboxPage } from './app.po';

describe('musictoolbox App', function() {
  let page: MusictoolboxPage;

  beforeEach(() => {
    page = new MusictoolboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
