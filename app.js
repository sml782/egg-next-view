'use strict';

module.exports = app => {
  app.config.coreMiddleware.splice(0, 0, 'nextRender');
  app.next.prepare();
};
