import { OnlyHumanCoreSkillKey } from '@/data/only-human/core-skills'

import { OnlyHumanSkill, OnlyHumanStat } from './only-human-attributes'

export interface OnlyHumanCharacter {
  name: string,
  stats: Record<OnlyHumanStat, number>,
  role: OnlyHumanRole,
  coreSkills: Record<OnlyHumanCoreSkillKey, number>,
  customSkills: OnlyHumanCustomSkill[],
}

export interface OnlyHumanRole {
  name: string,
  skillKeys: Set<OnlyHumanCoreSkillKey>,
}

export interface OnlyHumanCustomSkill extends OnlyHumanSkill {
  points: number,
}