type BackgroundColour = {
  colour: string
  aligned: boolean
}

export default interface ColourScheme {
  backdropColour: string
  alignedTextColour: string
  unalignedTextColour: string
  primaryBackgroundColour: BackgroundColour
  secondaryBackgroundColour: BackgroundColour
  buttonBackgroundColour: BackgroundColour 
}