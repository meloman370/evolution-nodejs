import React, { memo } from 'react'
import PaginationStyled from './style'
import PaginationItem from './components/PaginationItem'
import Icon from '../Icon'

const pageSize = 16
let visiblePerRow = 5 //always shold be odd

const Pagination = ({ page, count, onChange }) => {
  const countPages = Math.ceil(count / pageSize)
  const leftItems = []
  const rightItems = []
  let showArrows = true

  if (visiblePerRow >= countPages) {
    visiblePerRow = countPages
    showArrows = false
  }

  const countItemsPerSide = (visiblePerRow - 1) / 2
  let left = countItemsPerSide
  let right = countItemsPerSide

  // if active page on left side
  if ((page - 1) - left < 0) {
    const offset = Math.abs((page - 1) - left)
    right += offset
    left -= offset
  }

  // if active page on right side
  if (page + right > countPages) {
    const offset = page + right - countPages
    right -= offset
    left += offset
  }

  const clickNextHandler = () => {
    if (page < countPages) {
      onChange(page + 1)
    }
  }

  const clickPrevHandler = () => {
    if (page > 0) {
      onChange(page - 1)
    }
  }

  const clickFirstHandler = () => {
    onChange(1)
  }

  const clickLastHandler = () => {
    onChange(countPages)
  }

  const clickPageHandler = (newPage) => {
    if (page !== newPage) {
      onChange(newPage)
    }
  }

  // push items to left side
  if (left) {
    for (let i = left; i >= 1; i--) {
      leftItems.push(
        <PaginationItem onClick={clickPageHandler} key={page - i}>{page - i}</PaginationItem>
      )
    }
  }

  if (right) {
    for (let i = 1; i <= right; i++) {
      rightItems.push(
        <PaginationItem onClick={clickPageHandler} key={page + i}>{page + i}</PaginationItem>
      )
    }
  }

  return(
    <PaginationStyled>
      {showArrows &&
        <Icon name="prev_icon.png" alt="prev page" onClick={clickFirstHandler}/>
      }
      {leftItems}
      <PaginationItem onClick={clickPageHandler} key={page} active={true}>{page}</PaginationItem>
      {rightItems}
      {showArrows &&
        <Icon name="next_icon.png" alt="next page" onClick={clickLastHandler}/>
      }
    </PaginationStyled>
  )
}

export default memo(Pagination)