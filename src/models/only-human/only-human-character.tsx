import { OnlyHumanCoreSkillKey } from '@/data/only-human/core-skills'

import { OnlyHumanSkillWithPoints, OnlyHumanStat } from './only-human-attributes'

export interface OnlyHumanCharacter {
  name: string,
  stats: Record<OnlyHumanStat, number>,
  role: OnlyHumanRole,
  coreSkills: Record<OnlyHumanCoreSkillKey, number>,
  customSkills: OnlyHumanSkillWithPoints[],
}

export interface OnlyHumanRole {
  name: string,
  skillKeys: Set<OnlyHumanCoreSkillKey>,
}