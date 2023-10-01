# Characterise

A character builder for a bunch of different TTRPGs.

## To Do

- Routing.
- Those redirect alias name things so we don't always need to do relative imports.
  - https://www.npmjs.com/package/tsconfig-paths-webpack-plugin so I don't need to specify in both tsconfig and the webpack config.
  - https://betterprogramming.pub/the-right-usage-of-aliases-in-webpack-typescript-4418327f47fa has more on that.
- Favicon.
- Add a no-script element.
- Development instructions in the readme.
- A style guide note. Or maybe just enforce everything?

- Tests.

- Smarter bundling and chunks and whatnot
  - https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin
  - https://webpack.js.org/guides/code-splitting
  - https://webpack.js.org/guides/asset-management for any images
  - This should remove the need for the copy-webpack-plugin.
- See if we can make the webpack config files es modules?
- See if I can ensure that duplicate css files (say, for multiple instances of the same component) aren't included multiple times. I think this is the default, but it would be good to check.
- See if I can have pull requests optionally deploy to a different dev domain.
- Consider React.StrictMode