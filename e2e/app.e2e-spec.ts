import { ExFrontEndPage } from './app.po';

describe('ex-front-end App', function() {
  let page: ExFrontEndPage;

  beforeEach(() => {
    page = new ExFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
