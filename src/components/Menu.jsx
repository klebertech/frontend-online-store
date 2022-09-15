import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    const { id, name, handleClickMenu } = this.props;
    return (
      <div className="pl-6 py-1">
        <p
          id={id}
          onClick={handleClickMenu}
        >
          {name}
        </p>
      </div>
    )
  }
}
