# Notes

## Reminders

- The Github pages Github Actions workflow yaml file had some settings to allow the action to be triggered manually, and to control concurrency to avoid clashing simultaneous deployments. I've deleted it now but if it turns out we need that stuff, we can find it in the git history.

## Themes

- I think to begin with we should have some duplication, so we aren't solving problems that don't exist.
- A background colour other than the very background colour must be either aligned or unaligned. This refers to alignment with the theme, i.e. an aligned background colour in a light theme would be light.
- There is an aligned and an unaligned text colour. The aligned text colour is designed to go on aligned backgrounds, the unaligned text colour on unaligned backgrounds. So, in a light theme an aligned text colour would usually be dark.
- Aligned text colours must have accessibility-acceptable levels of contrast with aligned backgrounds, as must unaligned text colours and unaligned backgrounds, and aligned text colours and aligned backgrounds.

### What is a theme?

- Very background colour (like, in the margins where the page isn't, has no text on it so can be whatever)

- Aligned text colour (dark if the theme is light, light if the theme is dark)
- Unaligned text colour (usually light if the theme is light, and dark if the theme)

- Main background colour
- Header / footer / callout background colour
- General button background colour
- Primary button background colour
- Accept button background colour
- Danger button background colour.