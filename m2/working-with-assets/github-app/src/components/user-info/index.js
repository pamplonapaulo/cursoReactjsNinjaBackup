'use strict'

import React, { PropTypes } from 'react'
import style from './user-info.css'
//import './user-info.css'

const UserInfo = ({ userinfo }) => (
  <div className={style.userInfo}>
  {/* <div className='userInfo'> */}
    <img src={userinfo.photo} />

    <h1>
      <a href={`https://github.com/${userinfo.login}`}>
        {userinfo.username}
      </a>
    </h1>

    <ul className={style.reposInfo}>
    {/* <ul className='reposInfo'> */}
      <li>Repositórios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo
