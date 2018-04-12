import { PrototypeDashboardPage } from './app.po';

describe('prototype-dashboard App', () => {
  let page: PrototypeDashboardPage;

  beforeEach(() => {
    page = new PrototypeDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
