import * as React from 'react'
import classNames from 'classnames'

const NavMenu = () => {
  return (
    <nav className={classNames('hidden absolute -left-36')}>
      <ul>
        <li>back</li>
        <li>personal projects</li>
        <li>travel</li>
        <li>contact</li>
      </ul>
    </nav>
  )
}

export default NavMenu
