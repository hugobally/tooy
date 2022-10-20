import * as React from 'react'
import classNames from 'classnames'
import GithubIcon from 'src/images/github-icon.svg'

const Contact = ({ stateMachine, toggleSection }) => {
  return (
    <section>
      <div
        className={classNames('w-box-side transition-all overflow-auto', {
          'h-0': !stateMachine.contactOpened,
          'h-box-2/11': stateMachine.contactOpened,
        })}
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
          onClick={() => toggleSection('contact', !stateMachine.contactOpened)}
        >
        </div>
      </div>
    </section>
  )
}

export default Contact
