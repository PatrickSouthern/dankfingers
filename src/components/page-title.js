import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  background: linear-gradient(210deg, rgba(53,186,26,1) 0%, rgba(86,150,198,1) 50%, rgba(0,123,255,1) 100%);
  color: white;
  padding: 8rem 0;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
  text-align: center;
`

export default ({title}) => (
  <Background>
    <h1>{title}</h1>
  </Background>
)
