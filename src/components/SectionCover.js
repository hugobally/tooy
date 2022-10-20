import * as React from 'react'
import classNames from 'classnames'

const SectionCover = ({ title, icon, direction, order }) => {
  const els = [
    <img key="img" alt="flip-flops" src={icon} className="w-20" />,
    <h1 key="title" className="text-4xl">{title}</h1>,
  ]

  return (
    <div
      className={classNames('w-full h-full p-5', {
        'flex flex-col justify-end items-end p-5 text-right': direction === 'vertical',
      })}
    >
      {els}
    </div>
  )
}

export default SectionCover
