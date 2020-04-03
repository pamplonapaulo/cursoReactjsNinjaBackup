'use strict'

// Sets the 3 centered pages at the middle of the whole array, based on the active:
const centerRule = ({ total, activePage }) =>  activePage - 1 <= 0
    ? 1 
    : activePage === total
      ? activePage - 2 
      : activePage - 1

const isNumber = (value) => typeof value === 'number'

const pagination = ({ total = 1, activePage = 1 } = {}) => {
  if (!isNumber(total)) {
    throw new TypeError('total should be a number')
  }

  if (!isNumber(activePage)) {
    throw new TypeError('activePage should be a number')
  }

  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  // Array like bellow will have a length of 3, so indexes 0, 1 and 2.
  const visiblePages = 3

  // So 0, 1 or 2 plus the return of function centerRule give us the perfect 3 values of the middle of the pagination, not considering yet the extreme sides (first page, last page, and eventually the etc/...).
  let pages = [
    1,
    ...Array.from({ length: visiblePages }, (_, i) => i + centerRule({ total, activePage })),
    total
  ]
  // Above we see that array 'pages' has first and last values, '1' and 'total'.

  // Removes duplications:
  pages = pages.filter((page, index, array) => array.indexOf(page) === index)

  let firstPage = pages[0]
  let secondPage = pages[1]

  if (secondPage === (firstPage + 2)) {
    pages = [
      firstPage,
      firstPage + 1,
      ...pages.slice(1)
    ]
  }

  let penultimatePage = pages[pages.length - 2]
  let lastPage = pages[pages.length - 1]

  if (penultimatePage === (lastPage - 2)) {
    pages = [
      ...pages.slice(0, -1),
      lastPage - 1,
      lastPage
    ]
  }

  firstPage = pages[0]
  secondPage = pages[1]

  if (secondPage > (firstPage + 2)) {
    pages = [
      firstPage,
      '...',
      ...pages.slice(1)
    ]
  }

  penultimatePage = pages[pages.length - 2]
  lastPage = pages[pages.length - 1]

  if (penultimatePage < (lastPage - 2)) {
    pages = [
      ...pages.slice(0, -1),
      '...',
      lastPage
    ]
  }

  return pages
}

export default pagination
