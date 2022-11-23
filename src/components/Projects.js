import * as React from 'react'
import cl from 'classnames'
import PictureIcon from 'src/images/picture-icon.svg'
import SectionCover from 'src/components/SectionCover'

const Projects = ({ stateMachine, toggleSection }) => {
  return (
    <section>
      <div
        className={cl(
          'w-box-4/11 h-box-2/11 p-3',
          'transition [transform-origin:0_0]',
          {
            '[transform:rotateY(-90deg)]':
              stateMachine.experienceOpenedStepFour,
          }
        )}
      >
        <div
          className={cl('h-full w-full flex', 'section')}
          onClick={() =>
            toggleSection('projects', !stateMachine.projectsOpened)
          }
        >
          <SectionCover
            icon={PictureIcon}
            title="personal projects"
            vertical
          />
        </div>
      </div>
    </section>
  )
}

export const ProjectsContent = ({ stateMachine, toggleSection }) => {
  return (
    <div
      className={cl(
        'min-h-box-side min-w-box-side absolute top-0 left-0',
        'bg-white rounded-box',
        '[backface-visibility:hidden] rotate-y-180'
      )}
      onClick={() => toggleSection('projects', !stateMachine.projectsOpened)}
    >
      hello
    </div>
  )
}

export default Projects
