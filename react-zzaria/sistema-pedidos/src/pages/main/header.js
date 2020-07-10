import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar as MaterialToolbar,
  Typography
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { ReactComponent as MainLogo } from 'images/logo-react-zzaria.svg'
import { AuthContext } from 'contexts/auth'

const Header = () => {
  const { userInfo, handleLogout } = useContext(AuthContext)

  const [anchorElement, setAnchorElement] = useState(null)

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleCloseMenu = () => {
    setAnchorElement(null)
  }

  return (
    <AppBar>
      <Toolbar>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Typography color='inherit'>
          Hi, {userInfo.user.firstName}
        </Typography>

        <IconButton color='inherit' onClick={handleOpenMenu}>
          <AccountCircle />
        </IconButton>

        <Menu
          open={Boolean(anchorElement)}
          onClose={handleCloseMenu}
          anchorEl={anchorElement}
        >
          <MenuItem onClick={handleLogout}>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

const LogoContainer = styled.div`
  flex-grow: 1;
`

const Logo = styled(MainLogo)`
  height: 50px;
  width: 200px;

  & path {
    fill: #fff;
  }

  & line {
    stroke: #fff;
  }
`

const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
`

export default Header
