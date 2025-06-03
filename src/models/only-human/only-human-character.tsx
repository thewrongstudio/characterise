import { OnlyHumanCoreSkillKey } from '@/data/only-human/core-skills'

import { OnlyHumanSkillWithPoints, OnlyHumanStat } from './only-human-attributes'

export type OnlyHumanStats = Record<OnlyHumanStat, number>

export interface OnlyHumanCharacter {
  name: string,
  stats: OnlyHumanStats,
  role: OnlyHumanRole,
  coreSkills: Record<OnlyHumanCoreSkillKey, number>,
  customSkills: OnlyHumanSkillWithPoints[],
}

export interface OnlyHumanRole {
  name: string,
  skillKeys: Set<OnlyHumanCoreSkillKey>,
}