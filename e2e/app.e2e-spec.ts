import { NewsListPage } from './app.po';

describe('news-list App', () => {
  let page: NewsListPage;

  beforeEach(() => {
    page = new NewsListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
