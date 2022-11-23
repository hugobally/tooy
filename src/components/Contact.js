import * as React from 'react'
import cl from 'classnames'
import GithubIcon from 'src/images/github-icon.svg'
import DrinkIcon from 'src/images/drink-icon.svg'
import SectionCover from "./SectionCover";

const Contact = ({ stateMachine, toggleSection }) => {
  return (
    <section>
      <div
        className={cl('w-box-side transition-all overflow-auto', {
          'h-0': !stateMachine.contactOpened,
          'h-box-2/11': stateMachine.contactOpened,
        })}
      >
        <div className={cl('')}>
          hello
          <img alt="github icon" src={GithubIcon} />
        </div>
      </div>
      <div className={cl('w-box-side h-box-2/11 p-3')}>
        <div
          className={cl(
            'w-full h-full',
            'flex justify-end',
            'section',
            'transition [transform-origin:0_0]',
            {
              '[transform:rotateX(-90deg)]':
                stateMachine.experienceOpenedStepOne,
            }
          )}
          onClick={() => toggleSection('contact', !stateMachine.contactOpened)}
        >
            <SectionCover icon={DrinkIcon} title="contact"/>
        </div>
      </div>
    </section>
  )
}

export default Contact
