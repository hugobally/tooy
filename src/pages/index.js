import * as React from 'react'
import classNames from 'classnames'
import { useState } from 'react'
import GithubIcon from 'src/images/github-icon.svg'

const IndexPage = () => {
  const [opened, setOpened] = useState('')
  const toggleOpened = (val) =>
    opened !== val ? setOpened(val) : setOpened('')

  return (
    <main
      className={classNames(
        'w-screen flex items-start mt-box-margin-y justify-center'
      )}
    >
      <div
        className={classNames(
          'w-box-side-double flex transition justify-center'
        )}
      >
        {/* Box Container */}
        <div
          className={classNames(
            'min-h-box-side min-w-box-side flex flex-col',
            '[perspective:1000px]'
          )}
        >
          {/* Box Flipper */}
          <div
            className={classNames(
              'relative [transform-style:preserve-3d]',
              'duration-500',
              {
                'rotate-y-180': opened === 'experience',
              }
            )}
          >
            {/* Box Front Side*/}
            <div
              className={classNames(
                'min-h-box-side min-w-box-side',
                '[backface-visibility:hidden] top-0 left-0'
              )}
            >
              <div className={classNames('absolute top-0 w-full')}>
                <div className={classNames('absolute bottom-0 right-0')}>
                  Hugo Bally
                </div>
              </div>
              <div className="flex">
                <section>
                  <div
                    className={classNames(
                      'w-box-4/12 h-box-10/12 flex',
                      'bg-red-500 rounded-tl-box border-white border-r-4 border-b-4 cursor-pointer'
                    )}
                    onClick={() => toggleOpened('about')}
                  >
                    <h1></h1>
                  </div>
                  <div
                    className={classNames('transition-all duration-500', {
                      'w-0': !(opened === 'about'),
                      'w-box-side': opened === 'about',
                    })}
                  ></div>
                </section>
                <div className="flex-col">
                  <div className="flex">
                    <section>
                      <div
                        className={classNames(
                          'w-box-4/12 h-box-8/12 flex',
                          'bg-red-500 border-white border-x-4 border-b-4 cursor-pointer'
                        )}
                        onClick={() => toggleOpened('experience')}
                      />
                    </section>
                    <section>
                      <div
                        className={classNames(
                          'w-box-4/12 h-box-8/12 flex',
                          'bg-red-500 rounded-tr-box border-white border-l-4 border-b-4'
                        )}
                      />
                    </section>
                  </div>
                  <section className="w-box-8/12 h-box-2/12 relative">
                    <div className={classNames('absolute w-full h-full', 'bg-red-600')}>
                      test
                    </div>
                    <div
                      className={classNames(
                        'w-full h-full absolute flex',
                        'bg-red-500 [transform-origin:100%] transition-all duration-500 cursor-pointer',
                        {
                          '[transform:rotateY(-180deg)]': opened === 'travels',
                        },
                        'border-white border-y-4 border-l-4'
                      )}
                      onClick={() => toggleOpened('travels')}
                    ></div>
                  </section>
                </div>
              </div>
              <section>
                <div
                  className={classNames(
                    'w-box-side transition-all duration-500 overflow-auto',
                    {
                      'h-0': !(opened === 'contact'),
                      'h-box-2/12': opened === 'contact',
                    }
                  )}
                >
                  <div className={classNames('bg-red-800')}>
                    hello
                    <img alt="github icon" src={GithubIcon} />
                  </div>
                </div>
                <div
                  className="w-box-side h-box-2/12 bg-red-500 rounded-b-box border-white border-t-4 cursor-pointer"
                  onClick={() => toggleOpened('contact')}
                ></div>
              </section>
            </div>
            {/* Box Back Side*/}
            <div
              className={classNames(
                'min-h-box-side min-w-box-side absolute top-0 left-0',
                'bg-gray-800',
                '[backface-visibility:hidden] rotate-y-180'
              )}
              onClick={() => toggleOpened('experience')}
            >
              <nav className={classNames('absolute -left-36')}>
                <ul>
                  <li>back</li>
                  <li>personal projects</li>
                  <li>travel</li>
                  <li>contact</li>
                </ul>
              </nav>
              hello
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Toto</title>
