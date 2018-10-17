'use strict';

const mock = require('egg-mock');

describe('test/next-view.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/next-view-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, nextView')
      .expect(200);
  });
});
