import { OnlyHumanSkill } from '@/models/only-human/only-human-attributes'

const evasion: OnlyHumanSkill = {
  name: 'Evasion',
  stats: ['DEX', 'DEX'],
}
const rangedAttack: OnlyHumanSkill = {
  name: 'Ranged Attack',
  stats: ['DEX', 'INT'],
}
const speed: OnlyHumanSkill = {
  name: 'Speed',
  stats: ['DEX', 'STR'],
}
const medicine: OnlyHumanSkill = {
  name: 'Medicine',
  stats: ['INT', 'INT'],
}
const meleeBlock: OnlyHumanSkill = {
  name: 'Melee Block',
  stats: ['INT', 'STR'],
}
const meleeAttack: OnlyHumanSkill = {
  name: 'Melee Attack',
  stats: ['STR', 'STR'],
}
const toughness: OnlyHumanSkill = {
  name: 'Toughness',
  stats: ['STR', 'WIL'],
}

const stealth: OnlyHumanSkill = {
  name: 'Stealth',
  stats: ['DEX', 'WIL'],
}
const technology: OnlyHumanSkill = {
  name: 'Technology',
  stats: ['INT', 'INT'],
}
const insight: OnlyHumanSkill = {
  name: 'Insight',
  stats: ['INT', 'WIL'],
}
const persuasion: OnlyHumanSkill = {
  name: 'Persuasion',
  stats: ['WIL', 'WIL'],
}

export const coreSkills = { 
  evasion,
  rangedAttack,
  speed,
  medicine,
  meleeBlock,
  meleeAttack,
  toughness,

  stealth,
  technology,
  insight,
  persuasion,
}

export type OnlyHumanCoreSkillKey = keyof typeof coreSkills

export const zeroSkills: Record<OnlyHumanCoreSkillKey, number> = {
  evasion: 0,
  rangedAttack: 0,
  speed: 0,
  medicine: 0,
  meleeBlock: 0,
  meleeAttack: 0,
  toughness: 0,
  
  stealth: 0,
  technology: 0,
  insight: 0,
  persuasion: 0,
}
