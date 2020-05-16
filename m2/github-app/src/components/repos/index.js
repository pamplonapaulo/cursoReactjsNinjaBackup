'use strict'

import React, { PropTypes } from 'react'
import Pagination from 'components/pagination'
import style from './repos.css'

const Repos = ({ type, title, repos, handlePagination }) => (
  <div className={style[type]}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>

    <Pagination total={10} activePage={3} onClick={handlePagination} />
  </div>
)

Repos.defaultProps = {
  type: '',
  repos: []
}

Repos.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  handlePagination: PropTypes.func.isRequired,
  repos: PropTypes.array
}

export default Repos
