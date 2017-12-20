import { AxaltaDashboardPage } from './app.po';

describe('axalta-dashboard App', () => {
  let page: AxaltaDashboardPage;

  beforeEach(() => {
    page = new AxaltaDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
