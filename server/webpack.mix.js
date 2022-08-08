const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js/app.js')
    .react()
    .sass('resources/sass/app.scss', 'public/css')
    .styles(['resources/theme/vendor/lightbox2/css/lightbox.min.css' ,
    'resources/theme/vendor/bootstrap-select/css/bootstrap-select.min.css' ,
    'resources/theme/vendor/owl.carousel2/assets/owl.carousel.min.css' ,
    'resources/theme/vendor/owl.carousel2/assets/owl.theme.default.css' ,
    'resources/theme/css/style.default.css' ,
     'resources/theme/css/custom.css'], 'public/css/test/dstyle.css');
