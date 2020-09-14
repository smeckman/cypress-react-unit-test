import * as React from 'react'

export function Search() {
  const [value, setValue] = React.useState('')
  return (
    <div>
      <input
        aria-label="search"
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
      />

      <style jsx>{`
        input {
          border-radius: 20px;
        }
        div {
          background: red;
        }
      `}</style>
    </div>
  )
}
