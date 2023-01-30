const gulp = require("gulp");
// const sass = require("gulp-sass");
const sass = require("gulp-dart-sass");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
var twig = require('gulp-twig');

sass.compiler = require("node-sass");

const stylesDev = "./resources/sass/**/*.scss",
    stylesAll = [
        // './node_modules/bootstrap/dist/css/bootstrap.min.css',
        "./node_modules/animate.css/animate.min.css",
        "./node_modules/swiper/swiper-bundle.css",
        "./resources/sass/**/*.scss",
    ],
    scriptsDev = "./resources/js/**/*.js",
    scriptsAll = [
        // "./node_modules/jquery/dist/jquery.min.js",
        "./node_modules/@popperjs/core/dist/umd/popper.min.js",
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        "./node_modules/swiper/swiper-bundle.min.js",
        // "./node_modules/slick-carousel/slick/slick.min.js",
        // "./node_modules/typed.js/lib/typed.min.js",
        // "./node_modules/wow.js/dist/wow.min.js",
        // "./node_modules/jquery.maskedinput/src/jquery.maskedinput.js",
        // "./node_modules/ion-rangeslider/js/ion.rangeSlider.min.js",
        // './node_modules/jquery.marquee/jquery.marquee.min.js',
        // "./node_modules/parallax-js/dist/parallax.min.js",
        // "./node_modules/simple-parallax-js/dist/simpleParallax.js",
        "./resources/js/**/*.js",
    ],
    stylesProdDir = "./app/css/",
    scriptsProdDir = "./app/js/";

gulp.task("browser-sync", function (done) {
    browserSync.init({
        server: {
            baseDir: "./app/",
            // directory: true,
            index: "index.html",
        },
        notify: false,
    });

    browserSync.watch("./app/**.html").on("change", browserSync.reload);

    done();
});

gulp.task("sass", function (done) {
    return gulp
        .src(stylesAll)
        .pipe(sass())
        .pipe(postcss([tailwindcss('./tailwind.config.js')]))
        .pipe(concat("styles.css"))
        .pipe(gulp.dest(stylesProdDir))
        .pipe(browserSync.reload({ stream: true }));

    done();
});

gulp.task("sass-build", function (done) {
    return gulp
        .src(stylesAll)
        .pipe(sass())
        .pipe(postcss([tailwindcss('./tailwind.config.js')]))
        .pipe(concat("styles.css"))
        .pipe(gulp.dest('./docs/css/'))

    done();
});

gulp.task("js", function (done) {
    return gulp
        .src(scriptsAll)
        .pipe(concat("scripts.js"))
        .pipe(gulp.dest(scriptsProdDir))
        .pipe(browserSync.reload({ stream: true }));

    done();
});

gulp.task("js-build", function (done) {
    return gulp
        .src(scriptsAll)
        .pipe(concat("scripts.js"))
        .pipe(gulp.dest('./docs/js/'))

    done();
});

gulp.task("html", function (done) {
    return gulp
        .src('./resources/twig/pages/*.twig')
        .pipe(twig({
            data: {
                title: 'Gulp and Twig',
                benefits: [
                    'Fast',
                    'Flexible',
                    'Secure'
                ]
            }
        }))
        .pipe(gulp.dest('./app/'))
        .pipe(browserSync.reload({ stream: true }));

    done();
});

gulp.task("html-build", function (done) {
    return gulp
        .src('./resources/twig/pages/*.twig')
        .pipe(twig({
            data: {
                title: 'Gulp and Twig',
                benefits: [
                    'Fast',
                    'Flexible',
                    'Secure'
                ]
            }
        }))
        .pipe(gulp.dest('./docs/'))

    done();
});

gulp.task(
    "watch",
    gulp.series("html", "sass", "js", "browser-sync", function (done) {
        gulp.watch(
            [
                "./resources/sass/**/*.scss",
                "./resources/js/**/*.js",
                "./resources/twig/**/*.twig",
            ],
            gulp.series("html", "sass", "js")
        );

        done();
    })
);

gulp.task(
    "build",
    gulp.series("html-build", "sass-build", "js-build", function (done) {
        done();
    })
);

