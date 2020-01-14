const args = require('yargs')
    .option('compression', {
        boolean: true,
        default: false,
        describe: '圧縮ファイルに変換するかどうか',
    })
    .option('watch', {
        boolean: true,
        default: false,
        describe: '永続化するか',
    });

const value = {
    dest: `dist/`,
    src: 'app',
    watch: args.argv.watch,
    compression: args.argv.compression,
};

module.exports = value;
