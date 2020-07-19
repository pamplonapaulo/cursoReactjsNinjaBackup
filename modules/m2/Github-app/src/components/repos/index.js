'use strict'

import React, { PropTypes } from 'react'
import Pagination from 'components/pagination'
import style from './repos.css'

const Repos = ({ type, title, repos, handlePagination }) => (
  <div className={style[type]}>
    <h2>{title}</h2>
    <ul>
      {repos.repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>

    <Pagination total={repos.pagination.total} activePage={repos.pagination.activePage} onClick={handlePagination} />
  </div>
)

Repos.defaultProps = {
  type: ''
}

Repos.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  handlePagination: PropTypes.func.isRequired,
  repos: PropTypes.shape({
    repos: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
    pagination: PropTypes.shape({
      total: PropTypes.number,
      activePage: PropTypes.number
    }).isRequired
  })
}

export default Repos
