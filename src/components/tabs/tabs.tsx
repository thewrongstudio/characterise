import React, { ReactNode, useState } from 'react'

import './styles.css'

type Tab = {
  key: string
  name: string
  body: ReactNode
}
type Props = {
  tabs: [Tab, ...Tab[]]
}

export function Tabs({tabs}: Props) {
  const [selected, setSelected] = useState(tabs[0])

  return <div className='tabs'>
    <div className='tab-selection'>
      {tabs.map(
        (tab) => <button
          key={tab.key}
          onClick={() => setSelected(tab)}
          data-selected={tab===selected}
        >
          {tab.name}
        </button>,
      )}</div>
    <div className='tab-body'>{selected.body}</div>
  </div>
}