import * as React from 'react'
import classNames from 'classnames'
import BackpackIcon from 'src/images/backpack-icon.svg'
import SectionCover from "src/components/SectionCover";

const Experiences = ({ stateMachine, toggleSection }) => {
  return (
    <section>
      <div
        className={classNames('p-3 transition-all', {
          'w-box-4/11 h-box-7/11': !stateMachine.experienceOpened,
          'w-box-side h-box-side': stateMachine.experienceOpened,
        })}
      >
        <div
          className={classNames(
            'flex w-full h-full',
            'cursor-pointer ',
            'drop-shadow-lg bg-white text-red-500',
            {
              'rounded-lg': !stateMachine.experienceOpened,
              'rounded-box': stateMachine.experienceOpened,
            }
          )}
          onClick={() =>
            toggleSection('experience', !stateMachine.experienceOpened)
          }
        >
            <SectionCover icon={BackpackIcon} direction="vertical" title="experiences & education"/>
        </div>
      </div>
    </section>
  )
}

export default Experiences
