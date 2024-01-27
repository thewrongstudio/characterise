import { OnlyHumanRole } from '@/models/only-human/only-human-character'

export const communications: OnlyHumanRole = {
  name: 'Communications',
  skillKeys: new Set(['technology', 'insight', 'persuasion'] as const),
}