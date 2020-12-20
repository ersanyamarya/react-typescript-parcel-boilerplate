import React, { ReactElement } from 'react'
import { Link } from '@reach/router'
import logoImage from '../assets/images/logo.png'

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active-class' : '',
      }
    }}
  />
)

const Navigation = (): ReactElement => (
  <nav>
    <img src={logoImage} alt="weeve logo" />
    <NavLink to="/forms">Forms!</NavLink>
    <NavLink to="/texts">Texts!</NavLink>
  </nav>
)

export default Navigation
