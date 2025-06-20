import * as React from 'react'
import cl from 'classnames'
// import BackpackIcon from '/images/backpack-icon.svg'
import SectionCover from './SectionCover.jsx'

const Experiences = ({ stateMachine, toggleSection }) => {
  return (
    <section>
      <div
        className={cl('p-3 transition-all', {
          'w-box-4/11 h-box-2/11': !stateMachine.experienceOpened,
          'w-box-side h-box-side': stateMachine.experienceOpened,
        })}
      >
        <div
          className={cl(
            'flex w-full h-full',
              'section',
            {
              'rounded-lg': !stateMachine.experienceOpened,
              'rounded-box': stateMachine.experienceOpened,
            }
          )}
          onClick={() =>
            toggleSection('experience', !stateMachine.experienceOpened)
          }
        >
          <SectionCover
            icon="/images/backpack-icon.svg"
            title="experiences & education"
            vertical
          />
        </div>
      </div>
    </section>
  )
}

export default Experiences
