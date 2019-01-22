const Koa = require('koa');
const rt = require('koa-route');
const serve = require('koa-static');
const send = require('koa-send');

const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';
const PORT = process.env.PORT || 8080;

const app = new Koa();
const draw = require('./draw');

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        await send(ctx, '/public/error.png');
    }
    console.log(`${ctx.method} ${ctx.status} ${ctx.url}`);
});

app.use(serve(__dirname + '/public'));

app.use(rt.get('/:text.png', draw));

app.listen(PORT, HOSTNAME);
console.log(`Server listening on ${HOSTNAME}:${PORT}`);