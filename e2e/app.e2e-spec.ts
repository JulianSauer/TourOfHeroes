import { AngularDemoAppPage } from './app.po';

describe('angular-demo-app App', function() {
  let page: AngularDemoAppPage;

  beforeEach(() => {
    page = new AngularDemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
