import * as React from 'react'
import cl from 'classnames'
// import ForestIcon from '/images/forest-icon.svg'
import SectionCover from './SectionCover.jsx'

const Travels = ({ stateMachine, toggleSection }) => {
  return (
    <section>
      <div
        className={cl(
          'relative w-box-8/11 h-box-2/11 p-3',
          '[transform-origin:0_0] transition',
          {
            '[transform:rotateX(-90deg)] ':
              stateMachine.experienceOpenedStepTwo,
          }
        )}
      >
        <div className={cl('hidden absolute w-full h-full')}>content</div>
        <div
          className={cl(
            'flex w-full h-full',
            '[transform-origin:100%] transition-all cursor-pointer',
            'section',
            {
              '[transform:rotateY(-130deg)]': stateMachine.travelsOpened,
            },
          )}
          onClick={() => toggleSection('travels', !stateMachine.travelsOpened)}
        >
          <SectionCover
            icon="/images/forest-icon.svg"
            title="travels"
          />
        </div>
      </div>
    </section>
  )
}

export default Travels
