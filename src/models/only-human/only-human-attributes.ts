export type OnlyHumanStat = 'DEX' | 'INT' | 'STR' | 'WIL'

export interface OnlyHumanSkill {
  name: string,
  stats: [OnlyHumanStat, OnlyHumanStat],
}
