import React from 'react'
import styled from 'styled-components'
import { ReactComponent as MainLogo } from 'images/logo-react-zzaria.svg'
import LogoImg from 'images/slice-pizza.png'

function Logo () {
  return (
    <>
      <LogoName />
      <BrandIcon src={LogoImg} alt='Logo Slice' />
    </>
  )
}

const BrandIcon = styled.img`
  max-width: 50px;
`

const LogoName = styled(MainLogo)`
  height: 50px;
  width: 200px;

  & path {
    fill: ${({ theme }) => theme.palette.common.white};
  }

  & line {
    stroke: ${({ theme }) => theme.palette.common.white};
  }
`

export default Logo
