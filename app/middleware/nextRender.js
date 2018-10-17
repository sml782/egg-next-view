'use strict';
const { parse } = require('url');

async function render(app, ctx) {
  const parsedUrl = parse(ctx.req.url, true);
  ctx.status = 200;
  const handle = app.next.getRequestHandler();
  await handle(ctx.req, ctx.res, parsedUrl);
}

module.exports = (options, app) => {
  return async function(ctx, next) {
    const path = ctx.path;
    if (/\/_next\//.test(path)) {
      await render(app, ctx);
    } else {
      await next();
      if (ctx.status !== 404 || ctx.method !== 'GET') {
        return;
      }
      await render(app, ctx);
    }
  };
};
