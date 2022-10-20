// noinspection JSCheckFunctionSignatures

import * as React from 'react'
import classNames from 'classnames'
import { useState } from 'react'
import About from 'src/components/About'
import Experiences from 'src/components/Experiences'
import Projects, { ProjectsContent } from 'src/components/Projects'
import Travels from 'src/components/Travels'
import NavMenu from 'src/components/NavMenu'
import Contact from 'src/components/Contact'

const TRANSITION_DURATION = 250

const IndexPage = () => {
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
        'w-screen flex flex-col mt-box-margin-y items-center'
      )}
    >
      <div className={classNames('relative w-full flex justify-center')}>
        <div className={classNames('absolute bottom-0')}>
          <header>
            {/*TODO Semantics on h1/2/3..*/}
            <div className="text-red-500 text-center mb-8">
              <h1 className="text-4xl text-center">Hugo Bally</h1>
              <h2 className="block w-full text-center mt-4 text-2xl"> Fullstack Developer</h2>
            </div>
          </header>
        </div>
      </div>
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
              <div className="flex">
                <About {...{ stateMachine, toggleSection }} />
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
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Toto</title>
