const svg2png = require('svg2png-many');
var srcDir = 'inputs';
var dstDir = 'outputs';


var sizes = {
    height: 50,
    width: 500
};

svg2png.svg2PngDir(srcDir, dstDir, sizes)
    .then(() => console.log('Done'), errors => {
    console.error('Errors !!!');
        console.log(errors);
        if (!Array.isArray(errors)) {
            errors = [errors];
        }
        errors.forEach(err => console.error(err.stack || err));
    });
