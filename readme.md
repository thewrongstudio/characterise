# Characterise

A character builder for a bunch of different TTRPGs.

## To Do

- Smarter bundling and chunks and whatnot
  - https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin
  - https://webpack.js.org/guides/code-splitting
  - https://webpack.js.org/guides/asset-management for any images
  - This should remove the need for the copy-webpack-plugin.
- Typescript
- Linting
- See if we can make the webpack config files es modules?
- Work out what the ?: in the babel loader test regex is.
- Those redirect alias name things so we don't always need to do relative imports.
- See if I can ensure that duplicate css files (say, for multiple instances of the same component) aren't included multiple times. I think this is the default, but it would be good to check.