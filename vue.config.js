module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/_vars.scss";`,
      },
      sass: {
        prependData: `@import "~@/assets/scss/_vars.scss";`,
      },
    },
  },
};
