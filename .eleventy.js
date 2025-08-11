const pathPrefix = process.env.PATH_PREFIX || "/";
/** @type {import('@11ty/eleventy').UserConfig} */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  return {
    dir: {
      input: "src",
      includes: "partials",
      layouts: "layouts",
      data: "_data",
      output: "dist"
    },
    pathPrefix,
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
