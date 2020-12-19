import React from 'react'
import { render } from 'react-dom'
import styled from '@emotion/styled'
const Main = styled.h1`
  background-color: #333;
  color: #fff;
  margin: auto;
`

const Application = () => (
  <div>
    <Main>Application</Main>
    <h1>Sanyam</h1>
  </div>
)

render(<Application />, document.getElementById('root'))
