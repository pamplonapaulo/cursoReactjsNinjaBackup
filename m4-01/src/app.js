'use strict'

import React from 'react'
import { BrowserRouter, NavLink, Route, Switch, Redirect } from 'react-router-dom'

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
        <li>
          <Route>
            {({ history }) => (
              <button onClick={(e) => history.goBack()}>{'<-'} Voltar</button>
            )}
          </Route>
        </li>

        <li>
          <Route>
            {({ history }) => (
              <button onClick={(e) => history.goForward()}>Próxima página {'->'}</button>
            )}
          </Route>
        </li>
      </ul>

      <ul>
        <li><Link to='/' exact>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><a href='#site-info'>Site information</a></li>
        <li><Link to='/voltar-para-home'>Voltar para home</Link></li>
      </ul>

      <Switch>
        <Route path='/' exact component={Home} />
        <Redirect from='/voltar-para-home' to='/' />
        {/* <Route path='/voltar-para-home' render={() => <Redirect to='/' />} />*/}
        <Route path='/(about|contact)/(1|2)?' component={Page} />
        <Route path='/blog' component={Blog} />
        <Route component={Error404} />
      </Switch>

      <div id='site-info' style={{ margin: '1000px 0' }}>
        <h2>Site information</h2>
      </div>
    </div>
  </BrowserRouter>
)

const Error404 = () => (
  <h1>Page not found</h1>
)

const Home = ({ match, location, history }) => (
  <div>
    {console.log('HOME location:', location)}
    {console.log('HOME history:', history)}
    <h1>Home</h1>
  </div>
)

const Page = ({ match, location, history }) => (
  <div>
    {console.log('PAGE history:', history)}
    <h1>{match.url}</h1>
  </div>
)

const Blog = ({ match, location, history }) => (

  <div>
    {console.log('BLOG history:', history)}
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

const Post404 = ({ match, location, history }) => (
  <div>
    {console.log('POST 404 history:', history)}
    <h1>This post doesn't exist</h1>
  </div>
)

const Post = ({ match, location, history }) => (
  <div>
    {console.log('POST history:', history)}
    <h2>Post: {match.params.post}</h2>
  </div>
)

const NoPost = ({ numberOfPosts }) => (
  <div>
    <p>Select one of the {numberOfPosts} post</p>
  </div>
)

export default App
