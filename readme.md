# Characterise

A character builder for a bunch of different TTRPGs.

## To Do

- Favicon.
- Add a no-script element.
- Development instructions in the readme.

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

## Reminders

- The Github pages Github Actions workflow yaml file had some settings to allow the action to be triggered manually, and to control concurrency to avoid clashing simultaneous deployments. I've deleted it now but if it turns out we need that stuff, we can find it in the git history.