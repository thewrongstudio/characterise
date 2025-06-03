import React from 'react'
import { Button } from '@/components/button'
import { OnlyHumanStats } from '@/models/only-human/only-human-character'

type Props = {
  close: () => void
  stats: OnlyHumanStats
}

export function OnlyHumanStatsModal({close, stats}: Props) {
  return <div>
    {Object.entries(stats).map(([stat, value]) => <p key={stat}>
      {stat}: {value}
    </p>)}
    <Button onClick={() => close()}>Close</Button>
  </div>
}