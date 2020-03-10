'use strict'

import React, { PropTypes } from 'react'
import style from './repos.css'

const Repos = ({ type, title, repos }) => (
  <div className={style[type]}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  type: ''
}

Repos.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
