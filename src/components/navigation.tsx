import React, { ReactElement } from 'react'
import { Link } from '@reach/router'
import styled from '@emotion/styled'

import logoImage from '../assets/images/logo.png'

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? 'active-class' : '',
      }
    }}
  />
)
const NavBar = styled.nav`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 0.1em 0;
  margin-bottom: 1rem;
`
const Navigation = (): ReactElement => (
  <NavBar>
    <img src={logoImage} alt="weeve logo" />
    <div>
      <NavLink to="/forms">Forms!</NavLink>
      <NavLink to="/texts">Texts!</NavLink>
    </div>
  </NavBar>
)

export default Navigation
