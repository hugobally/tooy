import * as React from 'react'
import classNames from 'classnames'
import { useState } from 'react'
import GithubIcon from 'src/images/github-icon.svg'

const TRANSITION_DURATION = 250

const IndexPage = () => {
  // const [opened, setOpened] = useState('')
  // const toggleOpened = (val) =>
  //   opened !== val ? setOpened(val) : setOpened('')

  const [stateMachine, setStateMachine] = useState({
    lock: false,
    travelsOpened: false,
    contactOpened: false,
    aboutOpened: false,
    projectsOpened: false,
    experienceOpenedStepOne: false,
    experienceOpenedStepTwo: false,
    experienceOpenedStepThree: false,
    experienceOpenedStepFour: false,
    experienceOpened: false,
    currentlyOpened: null,
  })

  const toggleSection = async (section, opened) => {
    if (stateMachine.lock) return
    setStateMachine((stateMachine) => ({ ...stateMachine, lock: true }))

    if (stateMachine.currentlyOpened) {
      setStateMachine((stateMachine) => ({
        ...stateMachine,
        [`${stateMachine.currentlyOpened}Opened`]: false,
        currentlyOpened: null,
      }))
      await new Promise((r) => setTimeout(r, TRANSITION_DURATION))
    }

    if (section !== 'experience') {
      setStateMachine((stateMachine) => ({
        ...stateMachine,
        [`${section}Opened`]: opened,
        currentlyOpened: section,
      }))
    } else {
      let steps = [
        { experienceOpenedStepOne: opened },
        { experienceOpenedStepTwo: opened },
        { experienceOpenedStepThree: opened },
        { experienceOpenedStepFour: opened },
        { experienceOpened: opened },
      ]
      if (!opened) {
        steps = steps.reverse()
      }

      await Promise.all(
        steps.map(
          (step, i) =>
            new Promise((resolve) =>
              setTimeout(() => {
                setStateMachine((stateMachine) => ({
                  ...stateMachine,
                  ...step,
                }))
                resolve()
              }, (TRANSITION_DURATION / 2) * i)
            )
        )
      )
    }

    setStateMachine((stateMachine) => ({ ...stateMachine, lock: false }))
  }

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
              'relative [transform-style:preserve-3d] transition',
              {
                'rotate-y-180': stateMachine.projectsOpened,
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
                <section
                  className={classNames(
                    'transition [transform-origin:100%_0]',
                    {
                      '[transform:rotateY(-90deg)]':
                        stateMachine.experienceOpenedStepThree,
                    }
                  )}
                >
                  <div className={classNames('w-box-3/11 h-box-9/11 p-3')}>
                    <div
                      className={classNames(
                        'w-full h-full flex',
                        'bg-white cursor-pointer',
                        'rounded-tl-box rounded-tr-lg rounded-b-lg',
                        'drop-shadow-lg'
                      )}
                      onClick={() =>
                        toggleSection('about', !stateMachine.aboutOpened)
                      }
                    >
                      <h1></h1>
                    </div>
                  </div>
                  <div
                    className={classNames('transition-all', {
                      'w-0': !stateMachine.aboutOpened,
                      'w-box-side': stateMachine.aboutOpened,
                    })}
                  ></div>
                </section>
                <div className="flex-col">
                  <div className="flex">
                    <section>
                      <div
                        className={classNames('p-3 transition-all', {
                          'w-box-4/11 h-box-7/11':
                            !stateMachine.experienceOpened,
                          'w-box-side h-box-side':
                            stateMachine.experienceOpened,
                        })}
                      >
                        <div
                          className={classNames(
                            'flex w-full h-full',
                            'cursor-pointer ',
                            'drop-shadow-lg bg-white',
                            {
                              'rounded-lg': !stateMachine.experienceOpened,
                              'rounded-box': stateMachine.experienceOpened,
                            }
                          )}
                          onClick={() =>
                            toggleSection(
                              'experience',
                              !stateMachine.experienceOpened
                            )
                          }
                        />
                      </div>
                    </section>
                    <section>
                      <div
                        className={classNames(
                          'w-box-4/11 h-box-7/11 p-3',
                          'transition [transform-origin:0_0]',
                          {
                            '[transform:rotateY(-90deg)]':
                              stateMachine.experienceOpenedStepFour,
                          }
                        )}
                      >
                        <div
                          className={classNames(
                            'h-full w-full flex',
                            'bg-white cursor-pointer',
                            'rounded-tr-box rounded-tl-lg rounded-b-lg',
                            'drop-shadow-lg'
                          )}
                          onClick={() =>
                            toggleSection(
                              'projects',
                              !stateMachine.projectsOpened
                            )
                          }
                        />
                      </div>
                    </section>
                  </div>
                  <section>
                    <div
                      className={classNames(
                        'relative w-box-8/11 h-box-2/11 p-3',
                        '[transform-origin:0_0] transition',
                        {
                          '[transform:rotateX(-90deg)] ':
                            stateMachine.experienceOpenedStepTwo,
                        }
                      )}
                    >
                      <div
                        className={classNames('hidden absolute w-full h-full')}
                      >
                        content
                      </div>
                      <div
                        className={classNames(
                          'flex w-full h-full',
                          '[transform-origin:100%] transition-all cursor-pointer',
                          'bg-white rounded-lg',
                          {
                            '[transform:rotateY(-130deg)]':
                              stateMachine.travelsOpened,
                          },
                          'drop-shadow-lg'
                        )}
                        onClick={() =>
                          toggleSection('travels', !stateMachine.travelsOpened)
                        }
                      ></div>
                    </div>
                  </section>
                </div>
              </div>
              <section>
                <div
                  className={classNames(
                    'w-box-side transition-all overflow-auto',
                    {
                      'h-0': !stateMachine.contactOpened,
                      'h-box-2/11': stateMachine.contactOpened,
                    }
                  )}
                >
                  <div className={classNames('')}>
                    hello
                    <img alt="github icon" src={GithubIcon} />
                  </div>
                </div>
                <div className={classNames('w-box-side h-box-2/11 p-3')}>
                  <div
                    className={classNames(
                      'w-full h-full',
                      'flex justify-end',
                      'rounded-b-box rounded-t-lg bg-white cursor-pointer',
                      'transition [transform-origin:0_0]',
                      'drop-shadow-lg',
                      {
                        '[transform:rotateX(-90deg)]':
                          stateMachine.experienceOpenedStepOne,
                      }
                    )}
                    onClick={() =>
                      toggleSection('contact', !stateMachine.contactOpened)
                    }
                  >
                    {/*<h1 className="text-3xl">CONTACT</h1>*/}
                  </div>
                </div>
              </section>
            </div>
            {/* Box Back Side*/}
            <div
              className={classNames(
                'min-h-box-side min-w-box-side absolute top-0 left-0',
                'bg-white rounded-box',
                '[backface-visibility:hidden] rotate-y-180'
              )}
              onClick={() =>
                toggleSection('projects', !stateMachine.projectsOpened)
              }
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
