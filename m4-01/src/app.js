'use strict'

import React from 'react'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'

import 'normalize.css'
import 'milligram'
import './css/style.css'

const Link = (props) => (
  <NavLink activeStyle={{ color: 'red' }} {...props} />
)

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/' exact>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
      </ul>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/(about|contact)' component={Page} />
        <Route path='/blog' component={Blog} />
        <Route component={Error404} />
      </Switch>
    </div>
  </BrowserRouter>
)

const Error404 = () => (
  <h1>Page not found</h1>
)

const Home = () => (
  <h1>Home</h1>
)

const Page = ({ match }) => (
  <div>
    {console.log({match})}
    <h1>{match.url}</h1>
  </div>
)

const Blog = () => (

  <div>
    <h1>Blog</h1>
    <ul>
      <li><Link to='/blog/post-1'>Post 1</Link></li>
      <li><Link to='/blog/post-2'>Post 2</Link></li>
      <li><Link to='/blog/post-3'>Post 3</Link></li>
      <li><Link to='/blog/post-4'>Post 4</Link></li>
    </ul>

    <Switch>
      <Route exact path='/blog' component={NoPost} />
      <Route path='/blog/:post(post-[1234])' component={Post} />
      <Route component={Post404} />
    </Switch>
  </div>
)

const Post404 = () => (
  <h1>This post doesn't exist</h1>
)

const Post = ({ match }) => (
  <div>
    <h2>Post: {match.params.post}</h2>
  </div>
)

const NoPost = () => (
  <div>
    <p>Select a post</p>
  </div>
)

export default App
