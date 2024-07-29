const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  unstable_staticImage: false,
})

module.exports = withNextra({
  trailingSlash: true,
  output: 'export',
  images: {
    loader: "custom",
    loaderFile: "./loader.js",
  },
})
