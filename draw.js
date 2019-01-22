const Stream = require('stream');
const qrcode = require('qrcode');

const drawHandler = async (ctx, text) => {
    ctx.type = 'image/png';
    const stream = ctx.body = new Stream.PassThrough();
    stream.on('error', () => ctx.throw(500));
    qrcode.toFileStream(stream, text);
}

module.exports = drawHandler;