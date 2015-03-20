/* ====================================
    Configuration file
==================================== */


var paths = {
    dest  : "_site/",
    assets: "assets/",
    sass  : "_sass/",
}


/*
    Task settings
------------------------------------ */

module.exports = {

    /* ------------------------------
        Jekyll
    ------------------------------ */
    Jekyll: {
        src: [
            "*.{html,md,json,txt}",
            "_includes/**",
            "_layouts/**",
            "_posts/**",
            "_data/**",
            "_config.yml",
            "_config.dev.yml"
        ],
        dest: paths.dest
    },

    /* ------------------------------
        Sass
    ------------------------------ */
    Sass: {
        src: paths.sass + "*.{sass,scss}",
        dest: {
            one: paths.dest + paths.assets + "css/",
            two: paths.assets + "css/"
        },
        settings: {
            style: 'compressed',
            errLogToConsole: true
        },
        autoprefixer: [
            'last 2 versions',
            'safari 5',
            'ie 8',
            'ie 9',
            'opera 12.1',
            'ios 6',
            'android 4'
        ]
    },

    /* ------------------------------
        Clean-up
    ------------------------------ */
    clear: [
        paths.dest,
        paths.assets
    ],

    /* ------------------------------
        BrowserSync
    ------------------------------ */
    browserSync: {
        server: {
            baseDir: paths.dest
        },
        host: "localhost",
        open: false
    },
}