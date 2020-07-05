'use strict'

import React from 'react'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'

import 'normalize.css'
import 'milligram'
import './css/style.css'

const Link = (props) => (
  <Route path={props.to} exact={props.exact}>
    {({ match, history }) => (
      <a
        href={props.to}
        style={match ? { color: 'red' } : null}
        onClick={(e) => {
          e.preventDefault()
          history.push(props.to)
        }}
      >
        {props.children}
      </a>
    )}
  </Route>
)

// const Link = (props) => (
//   <NavLink activeStyle={{ color: 'red' }} {...props} />
// )

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
        <Route path='/(about|contact)/(1|2)?' component={Page} />
        <Route path='/blog' component={Blog} />
        <Route component={Error404} />
      </Switch>
    </div>
  </BrowserRouter>
)

const Error404 = () => (
  <h1>Page not found</h1>
)

const Home = ({ match }) => (
  <div>
    {console.log('HOME match:', match)}
    <h1>Home</h1>
  </div>
)

const Page = ({ match }) => (
  <div>
    {console.log('PAGE match:', match)}
    <h1>{match.url}</h1>
  </div>
)

const Blog = ({ match }) => (

  <div>
    {console.log('BLOG match:', match)}
    <h1>Blog</h1>
    <ul>
      <li><Link to='/blog/post-1'>Post 1</Link></li>
      <li><Link to='/blog/post-2'>Post 2</Link></li>
      <li><Link to='/blog/post-3'>Post 3</Link></li>
      <li><Link to='/blog/post-4'>Post 4</Link></li>
    </ul>

    <Switch>
      <Route exact path='/blog' render={(props) => <NoPost numberOfPosts={2} {...props} />} />
      <Route path='/blog/:post(post-[1234])' component={Post} />
      <Route component={Post404} />
    </Switch>
  </div>
)

const Post404 = ({ match }) => (
  <div>
    {console.log('POST 404 match:', match)}
    <h1>This post doesn't exist</h1>
  </div>
)

const Post = ({ match }) => (
  <div>
    {console.log('POST match:', match)}
    <h2>Post: {match.params.post}</h2>
  </div>
)

const NoPost = ({ numberOfPosts }) => (
  <div>
    <p>Select one of the {numberOfPosts} post</p>
  </div>
)

export default App
