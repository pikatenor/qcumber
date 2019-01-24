const Stream = require('stream');
const qrcode = require('qrcode');

const drawHandler = (ctx, text) => {
    ctx.type = 'image/png';
    ctx.body = new Stream.PassThrough();
    const stream = new Stream.PassThrough();
    stream.on('error', ctx.onerror).pipe(ctx.body);
    qrcode.toFileStream(stream, text);
}

module.exports = drawHandler;
