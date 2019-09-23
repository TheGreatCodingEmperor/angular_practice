// =============================
// Email: info@eXentric.work
// www.eXentric.work/templates
// =============================

import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: UltraApp PRO', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('UltraApp PRO');
  });
});
