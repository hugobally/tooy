import * as React from 'react'
import classNames from 'classnames'
import { useState } from 'react'
import GithubIcon from 'src/images/github-icon.svg'

const IndexPage = () => {
  const [opened, setOpened] = useState(false)

  return (
    <main
      className={classNames(
        'w-screen flex items-start mt-box-margin-y justify-center'
      )}
    >
      <div
        className={classNames('w-box-side-double flex transition justify-center')}
      >
        <div className="min-h-box-side min-w-box-side flex flex-col">
          <div className="flex">
            <div className="bg-green-500 w-box-4/12 h-box-10/12 flex" />
            <div
              className={classNames('transition-all duration-1000', {
                'w-0': !opened,
                'w-box-side': opened,
              })}
            ></div>
            <div className="flex-col">
              <div className="flex">
                <div className="bg-red-500 w-box-4/12 h-box-8/12 flex" />
                <div className="bg-red-400 w-box-4/12 h-box-8/12 flex" />
              </div>
              <div
                className={classNames(
                  'w-box-8/12 h-box-2/12 flex',
                  'bg-pink-500 [transform-origin:100%] transition-all duration-1000',
                  { '[transform:rotateY(-180deg)]': opened }
                )}
                onClick={() => setOpened(!opened)}
              >
                test
              </div>
            </div>
          </div>
          <div
            className={classNames('w-box-side transition-all duration-1000', {
              'h-0': !opened,
              'h-box-2/12': opened,
            })}
          >
            hello
            <img alt="github icon" src={GithubIcon} />
          </div>
          <div className="w-box-side h-box-2/12 bg-yellow-500"></div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Toto</title>
