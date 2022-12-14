import * as React from 'react'
import cl from 'classnames'
import FlipFlopIcon from 'src/images/flipflop-icon.svg'
import SectionCover from 'src/components/SectionCover'
import TravelIllustration from 'src/images/travel-illustration.svg'
import ReadingIllustration from 'src/images/reading-illustration.svg'

const About = ({ stateMachine, toggleSection, setDebugHovered }) => {
  return (
    <section
      className={cl('transition [transform-origin:100%_0]', {
        '[transform:rotateY(-90deg)]': stateMachine.experienceOpenedStepThree,
      })}
      onMouseEnter={() => setDebugHovered(TravelIllustration)}
      onMouseLeave={() => setDebugHovered(ReadingIllustration)}
    >
      <div className={cl('w-box-3/11 h-box-4/11 p-3')}>
        <div
          className={cl(
            'w-full h-full flex transition',
              'section',
            { 'bg-red-500 text-white': stateMachine.aboutOpened }
          )}
          onClick={() => toggleSection('about', !stateMachine.aboutOpened)}
        >
          <SectionCover icon={FlipFlopIcon} vertical title="about"/>
        </div>
      </div>
      <div
        className={cl('transition-all', {
          'w-0': !stateMachine.aboutOpened,
          'w-box-side': stateMachine.aboutOpened,
        })}
      ></div>
    </section>
  )
}
export default About
