import * as React from 'react'
import classNames from 'classnames'
import PictureIcon from 'src/images/picture-icon.svg'
import SectionCover from "src/components/SectionCover";

const Projects = ({ stateMachine, toggleSection }) => {
  return (
    <section>
      <div
        className={classNames(
          'w-box-4/11 h-box-7/11 p-3',
          'transition [transform-origin:0_0]',
          {
            '[transform:rotateY(-90deg)]':
              stateMachine.experienceOpenedStepFour,
          }
        )}
      >
        <div
          className={classNames(
            'h-full w-full flex',
            'bg-white cursor-pointer',
            'rounded-tr-box rounded-tl-lg rounded-b-lg',
            'drop-shadow-lg',
            'text-red-500'
          )}
          onClick={() =>
            toggleSection('projects', !stateMachine.projectsOpened)
          }
        >
            <SectionCover icon={PictureIcon} direction="vertical" title="personal projects"/>
        </div>
      </div>
    </section>
  )
}

export const ProjectsContent = ({ stateMachine, toggleSection }) => {
  return (
    <div
      className={classNames(
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
