const CleanCSS = require("clean-css");
const svgContents = require("eleventy-plugin-svg-contents");
const { minify } = require("terser");

module.exports = function(eleventyConfig) {
  // Copy the `img/` directory
  eleventyConfig.addPassthroughCopy("img");
  //cssmin
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  //svgContents
  eleventyConfig.addPlugin(svgContents); 
  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
  ) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  }); 
};
