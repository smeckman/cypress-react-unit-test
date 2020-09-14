import * as React from 'react'

export function Search() {
  const [value, setValue] = React.useState('')
  return (
    <input
      aria-label="search"
      value={value}
      onChange={e => setValue(e.currentTarget.value)}
    />
  )
}
