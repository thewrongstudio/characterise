// TODO: Fix oxford comma. It shouldn't appear in lists of two.

export default function makeEnglishStringList(
  strings: string[],
  joiningWord: 'and' | 'or',
  oxfordComma = true,
): string {
  const lastElement = strings.at(-1) || ''
  if (strings.length <= 1) {
    return lastElement
  }

  const finalSeparator = (oxfordComma ? ',' : '') + ` ${joiningWord} `
  return strings.slice(0,-1).join(', ') + finalSeparator + lastElement
}