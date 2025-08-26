import React from 'react'

export default function Time() {
  return (
    <div>{new Date().toLocaleDateString()}</div>
  )
}
