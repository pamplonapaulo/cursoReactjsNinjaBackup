import React, { lazy, Suspense, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { Link, Route, Switch, useLocation } from 'react-router-dom'
import {
  Divider,
  Drawer as MaterialDrawer,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core'

import * as routes from 'routes'

const Orders = lazy(() => import('pages/orders'))
const PizzasSizes = lazy(() => import('pages/pizzas-sizes'))
const PizzasFlavours = lazy(() => import('pages/pizzas-flavours'))

const Main = () => {
  useScrollToTop()
  const { pathname } = useLocation()

  const getSelectedMenuItem = useCallback((item) => {
    console.log('pathname', pathname)
    console.log('item.link', item.link)

    return pathname === item.link ||
      (pathname.includes(item.link) && item.link !== routes.HOME)
  }, [pathname])

  return (
    <>
      <Drawer variant='permanent'>
        <DrawerContent>

          <Typography variant='h4'>React-zzaria</Typography>

          <Typography>(Register System)</Typography>

        </DrawerContent>

        <Divider />

        <List>
          {menuItems.map(item => (
            <ListItem
              key={item.label}
              button
              selected={getSelectedMenuItem(item)}
              component={Link}
              to={item.link}
            >
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          ))}
        </List>

      </Drawer>

      <Content>
        <Suspense fallback='Loading...'>
          <Switch>
            {menuItems.map(item => (
              <Route key={item.link} path={item.link} exact={item.exact}>
                <item.component />
              </Route>
            ))}
          </Switch>
        </Suspense>
      </Content>
    </>
  )
}

function useScrollToTop () {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}

const menuItems = [
  {
    label: 'Orders',
    link: routes.HOME,
    component: Orders,
    exact: true
  },
  {
    label: 'Pizza Sizes',
    link: routes.PIZZAS_SIZES,
    component: PizzasSizes
  },
  {
    label: 'Pizza Flavours',
    link: routes.PIZZAS_FLAVOURS,
    component: PizzasFlavours
  }
]

const Drawer = styled(MaterialDrawer)`
  && {
    .MuiPaper-root {
      width: ${({ theme }) => theme.extend.drawerWidth}px;
    }
  }
`

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(1)}px;
  text-align: center;
`

const Content = styled.main`
  margin-left: ${({ theme }) => theme.extend.drawerWidth}px;
  padding: ${({ theme }) => theme.spacing(3)}px;
`

export default Main
