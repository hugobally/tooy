// noinspection JSCheckFunctionSignatures

import * as React from 'react'
import cl from 'classnames'
import { useState } from 'react'
import About from 'src/components/About'
import Experiences from 'src/components/Experiences'
import Projects, { ProjectsContent } from 'src/components/Projects'
import Travels from 'src/components/Travels'
import NavMenu from 'src/components/NavMenu'
import Contact from 'src/components/Contact'
import ReadingIllustration from 'src/images/reading-illustration.svg'

const TRANSITION_DURATION = 250

const IndexPage = () => {
  const [debugHovered, setDebugHovered] = useState(ReadingIllustration)
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
    } else if (section === 'experience') {
      let steps = [
        { experienceOpenedStepOne: opened },
        { experienceOpenedStepTwo: opened },
        { experienceOpenedStepThree: opened },
        { experienceOpenedStepFour: opened },
        { experienceOpened: opened, currentlyOpened: opened ? section : null },
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
    } else {
      setStateMachine((stateMachine) => ({
        ...stateMachine,
        [`${section}Opened`]: opened,
        currentlyOpened: section,
      }))
    }

    setStateMachine((stateMachine) => ({ ...stateMachine, lock: false }))
  }

  console.log(debugHovered)

  return (
    <main>
      {/*TODO Semantics*/}
      <div
        className={cl(
          'absolute top-0 h-screen w-[var(--side-col-width)] flex items-center'
        )}
      >
        <svg viewBox="0 0 45 20" opacity="0.05">
          <text x="1" y="15" fill="#fff" stroke="#000" strokeWidth="0.25">
            hugo
          </text>
        </svg>
      </div>
      <div
        className={cl(
          'absolute top-0 h-screen w-[var(--side-col-width)] left-[var(--r-side-col-start)] flex items-center'
        )}
      >
        <svg viewBox="0 0 45 20" opacity="0.05">
          <text x="1" y="15" fill="#fff" stroke="#000" strokeWidth="0.25">
            bally
          </text>
        </svg>
      </div>

      <div
        className={cl('w-screen flex flex-col mt-box-margin-y items-center')}
      >
        {/*<div className={cl('relative w-full flex justify-center')}>*/}
        {/*  <div className={cl('absolute bottom-0')}>*/}
        {/*    <header>*/}
        {/*      /!*TODO Semantics on h1/2/3..*!/*/}
        {/*      /!*<div className="text-center mb-8">*!/*/}
        {/*      /!*  <h1 className="text-4xl text-center">Hugo Bally</h1>*!/*/}
        {/*      /!*  <h2 className="block w-full text-center mt-4 text-2xl"> Fullstack Developer</h2>*!/*/}
        {/*      /!*</div>*!/*/}
        {/*    </header>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div className={cl('w-box-side-double flex transition justify-center')}>
          {/* Box Container */}
          <div
            className={cl(
              'min-h-box-side min-w-box-side flex flex-col',
              '[perspective:1000px]'
            )}
          >
            {/* Box Flipper */}
            <div
              className={cl(
                'relative [transform-style:preserve-3d] transition',
                {
                  'rotate-y-180': stateMachine.projectsOpened,
                }
              )}
            >
              {/* Box Front Side*/}
              <div
                className={cl(
                  'min-h-box-side min-w-box-side',
                  '[backface-visibility:hidden] top-0 left-0'
                )}
              >
                {!stateMachine.currentlyOpened && (
                  <div className={cl('w-box-side h-box-5/11')}>
                    {
                      debugHovered &&
                        <img
                            key={String(debugHovered)}
                            // alt="" TODO
                            src={
                              debugHovered
                            }
                            className="w-full h-full transition animate-slide-in-blurred-bottom"
                        />
                    }
                  </div>
                )}
                <div className="flex">
                  <About
                    {...{ stateMachine, toggleSection, setDebugHovered }}
                  />
                  <div className="flex-col">
                    <div className="flex">
                      <Experiences {...{ stateMachine, toggleSection }} />
                      <Projects {...{ stateMachine, toggleSection }} />
                    </div>
                    <Travels {...{ stateMachine, toggleSection }} />
                  </div>
                </div>
                <Contact {...{ stateMachine, toggleSection }} />
              </div>
              {/* Box Back Side*/}
              <ProjectsContent {...{ stateMachine, toggleSection }} />
              <NavMenu />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Toto</title>
