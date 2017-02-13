import { TrueSolutionPagePage } from './app.po';

describe('true-solution-page App', function() {
  let page: TrueSolutionPagePage;

  beforeEach(() => {
    page = new TrueSolutionPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
