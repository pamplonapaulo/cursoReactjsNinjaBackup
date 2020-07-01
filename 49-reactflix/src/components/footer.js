'use strict'

import React from 'react'
import styled from 'styled-components'
import { footerHeight } from 'utils/constants'

const MainFooter = () => (
  <Footer>
    &copy; 2020
  </Footer>
)

const Footer = styled.footer`
  align-items: center;
  background: #333;
  display: flex;
  height: ${footerHeight};
  justify-content: center;
`

export default MainFooter
