
/**
 * lighthouse config
 * https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md
 */
module.exports = {
  ci: {
    collect: {
        staticDistDir: './docs',
        url: ['http://localhost/index.html'],
        isSinglePageApplication: true,
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
