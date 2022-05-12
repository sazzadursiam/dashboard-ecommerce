const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('src/Pages/**/*.scss')
    .pipe(sass())
    .pipe(dest('src/css'))
}

function watchTask() {
    watch(["src/Pages/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask)