import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    const { id, name, handleClickMenu } = this.props;
    return (
      <div className="py-1">
        <li
          id={id}
          onClick={handleClickMenu}
          className="list-none cursor-pointer"
        >
          {name}
        </li>
      </div>
    )
  }
}
