'use strict'

import React from 'react'

import style from './pagination.css'

const Dots = ({ className }) => <span className={className}>...</span>

const Page = ({ page, pageLink, onClick }) => {
  const Component = page === '...' ? Dots : 'a'

  const handleClick = !onClick ? null : (e) => {
    e.preventDefault()
    onClick(page)
  }

  return (
    <Component href={pageLink} onClick={handleClick} className={style.paginationLink}>
      {page}
    </Component>
  )
}

export default Page
