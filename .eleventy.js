const CleanCSS = require("clean-css");
const svgContents = require("eleventy-plugin-svg-contents");
module.exports = function(eleventyConfig) {
  // Copy the `img/` directory
  eleventyConfig.addPassthroughCopy("img");
  //cssmin
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  //svgContents
  eleventyConfig.addPlugin(svgContents);  
  // Nunjucks Shortcode
  // eleventyConfig.addNunjucksShortcode("cta", function(cta) {
  //   return `<div class="card cta-card">
  //             <div class="card-section">
  //               <h2 class="card-section-title">
  //                 <span class="eyebrow">
  //                   ${cta.eyebrow ? `${cta.eyebrow}` : 'Do you have a complex software problem?'}
  //                 </span>
  //                 ${cta.title ? `${cta.title}` : 'We’re curious. Get in touch!'}
  //               </h2>
  //               ${cta.content ? `${cta.content}` : 'We like solving the most difficult issues, so if you think you’ve got a real headache of a software problem we want to hear from you!'}
  //             </div>
  //             <a href="mailto:info@etosis.com" class="card-button"><i class="icon-mail"></i>Email us <i class="icon-arrow-right"></i></a>
  //           </div>`;
  //   });
};
