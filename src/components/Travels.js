import * as React from 'react'
import classNames from 'classnames'

const Travels = ({ stateMachine, toggleSection }) => {
  return (
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
        <div className={classNames('hidden absolute w-full h-full')}>
          content
        </div>
        <div
          className={classNames(
            'flex w-full h-full',
            '[transform-origin:100%] transition-all cursor-pointer',
            'bg-white rounded-lg',
            {
              '[transform:rotateY(-130deg)]': stateMachine.travelsOpened,
            },
            'drop-shadow-lg'
          )}
          onClick={() => toggleSection('travels', !stateMachine.travelsOpened)}
        ></div>
      </div>
    </section>
  )
}

export default Travels
