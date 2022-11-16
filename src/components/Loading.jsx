import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div className="animate-pulse h-full w-full text-center absolute bg-neutral-200/75 text-2xl">
      Loading...</div>
    )
  }
}
