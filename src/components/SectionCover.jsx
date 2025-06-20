import * as React from 'react'
import cl from 'classnames'

const SectionCover = ({ title, icon, order, vertical }) => {
  const els = [
    <h1 key="title" className="text-xl">
      {title}
    </h1>,
    icon && <img key="img" alt={title} src={icon} className="w-14" />,
  ].filter(Boolean)

  return (
    <div
      className={cl('w-full h-full p-5 flex justify-end', {
        'flex-col justify-end text-right items-end': vertical,
        'items-end justify-end': !vertical
      })}
    >
      {vertical ? els.reverse() : els}
    </div>
  )
}

export default SectionCover
