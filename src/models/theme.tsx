type BackgroundColour = {
  colour: string
  aligned: boolean
}

export interface Theme {
  backdropColour: string
  alignedTextColour: string
  unalignedTextColour: string
  primaryBackgroundColour: BackgroundColour
  secondaryBackgroundColour: BackgroundColour
  buttonBackgroundColour: BackgroundColour
  hoveredButtonBackgroundColour: BackgroundColour
  panelBackgroundColour: BackgroundColour
}

export function applyTheme(theme: Theme) {
  document.documentElement.style.setProperty('--backdrop-colour', theme.backdropColour)
  document.documentElement.style.setProperty('--primary-background-colour', theme.primaryBackgroundColour.colour)
  document.documentElement.style.setProperty('--secondary-background-colour', theme.secondaryBackgroundColour.colour)
  document.documentElement.style.setProperty('--button-background-colour', theme.buttonBackgroundColour.colour)
  document.documentElement.style.setProperty('--hovered-button-background-colour', theme.hoveredButtonBackgroundColour.colour)
  document.documentElement.style.setProperty('--panel-background-colour', theme.panelBackgroundColour.colour)
  document.documentElement.style.setProperty('--primary-text-colour', theme.primaryBackgroundColour.aligned ? theme.alignedTextColour : theme.unalignedTextColour)
  document.documentElement.style.setProperty('--secondary-text-colour', theme.secondaryBackgroundColour.aligned ? theme.alignedTextColour : theme.unalignedTextColour)
  document.documentElement.style.setProperty('--button-text-colour', theme.buttonBackgroundColour.aligned ? theme.alignedTextColour : theme.unalignedTextColour)
  document.documentElement.style.setProperty('--hovered-button-text-colour', theme.hoveredButtonBackgroundColour.aligned ? theme.alignedTextColour : theme.unalignedTextColour)
  document.documentElement.style.setProperty('--panel-text-colour', theme.panelBackgroundColour.aligned ? theme.alignedTextColour : theme.unalignedTextColour)
}