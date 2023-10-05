# To Do

- add more cats
- Favicon.
- Add a no-script element.
- Development instructions in the readme.
- Add subtle and unsubtle versions of both the text colours to colour schemes.
- Add selected button background colour to colour schemes.
- Switch to using the word "theme" instead of colour scheme.
- Reduce css repetition in settings buttons
- Support changes in the storage modal. Versioned or something.

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