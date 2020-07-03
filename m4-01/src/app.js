'use strict'

import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import 'normalize.css'
import 'milligram'

const App = () => (
  <BrowserRouter>
    <div>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/blog' component={Blog} />

      <ul>
        <li>
          <Link to='/' children='Home' />
        </li>
        <li>
          <Link to='/about' children='About' />
        </li>
        <li>
          <Link to='/blog' children='Blog' />
        </li>
      </ul>

    </div>
  </BrowserRouter>
)

const Home = () => (
  <h1>Home</h1>
)

const About = () => (
  <h1>About</h1>
)

const Blog = () => (

  <div>
    <h1>Blog</h1>
    <ul>
      <li><Link to='/blog/Jesus'>Post about Jesus's life</Link></li>
      <li><Link to='/blog/Sidarta'>Post about Sidarta's life</Link></li>
    </ul>

    <Route path='/blog/:post' component={Post} />
    <Route exact path='/blog' component={NoPost} />
  </div>
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
