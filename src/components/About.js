import * as React from 'react'
import classNames from 'classnames'
import FlipFlopIcon from 'src/images/flipflop-icon.svg'
import SectionCover from 'src/components/SectionCover'

const About = ({ stateMachine, toggleSection }) => {
  return (
    <section
      className={classNames('transition [transform-origin:100%_0]', {
        '[transform:rotateY(-90deg)]': stateMachine.experienceOpenedStepThree,
      })}
    >
      <div className={classNames('w-box-3/11 h-box-9/11 p-3')}>
        <div
          className={classNames(
            'w-full h-full flex transition',
            'bg-white hover:bg-red-500 cursor-pointer',
            'rounded-tl-box rounded-tr-lg rounded-b-lg',
            'drop-shadow-lg',
            'text-red-500 hover:text-white',
            { 'bg-red-500 text-white': stateMachine.aboutOpened }
          )}
          onClick={() => toggleSection('about', !stateMachine.aboutOpened)}
        >
          <SectionCover icon={FlipFlopIcon} direction="vertical" title="about"/>
        </div>
      </div>
      <div
        className={classNames('transition-all', {
          'w-0': !stateMachine.aboutOpened,
          'w-box-side': stateMachine.aboutOpened,
        })}
      ></div>
    </section>
  )
}
export default About
