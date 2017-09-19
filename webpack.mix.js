let mix = require('laravel-mix');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.react('./src/js/app.js', './js')
.setPublicPath('./')
.browserSync({
  server: "./dist",
  proxy: "",
  files: './dist/**/*'
})
.webpackConfig({
  output: {
    path: __dirname + '/dist',
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename:'index.html',
      template: 'src/index.html', // Load a custom template (ejs by default see the FAQ for details)
      // excludeAssets: [/app.js/] // exclude style.js or style.[chunkhash].js
    }),
    new HtmlWebpackPlugin({
      filename:'props.html',
      template: 'src/props.html', // Load a custom template (ejs by default see the FAQ for details)
      // excludeAssets: [/app.js/] // exclude style.js or style.[chunkhash].js
    }),
    new HtmlWebpackPlugin({
      filename:'counter.html',
      template: 'src/counter.html', // Load a custom template (ejs by default see the FAQ for details)
      // excludeAssets: [/app.js/] // exclude style.js or style.[chunkhash].js
    }),
    new HtmlWebpackPlugin({
      filename:'state.html',
      template: 'src/state.html', // Load a custom template (ejs by default see the FAQ for details)
      // excludeAssets: [/app.js/] // exclude style.js or style.[chunkhash].js
    }),
    new HtmlWebpackPlugin({
      filename:'comment.html',
      template: 'src/comment.html', // Load a custom template (ejs by default see the FAQ for details)
      // excludeAssets: [/app.js/] // exclude style.js or style.[chunkhash].js
    })
  ]

});

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
// mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.dev');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
