import React from 'react'
import {
  Button,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { getAnswers } from '../../store/answers/reducer'
import SectionCompleteButton from './SectionCompleteButton'
import { getNextModuleSection } from '../../store/user/reducer'

/* **************************************************
   SectionExercise component

   Shows / hides a complex interactive component.

   props:
     user -- user object
     moduleNum -- integer
     sectionNum -- integer
     sectionTitle -- title of the section for resdisplay if we do a modal below this
     exercise -- component user will interact with
***************************************************** */
class SectionExercise extends React.Component {

  state = {
    isVisible: false,
  }

  // **************************************************
  // Show the complex interactive component
  onclickStart = () => {
    this.setState({ isVisible: true })
  }

  // Complete
  onComplete = () => {
    const { user, moduleNum, sectionNum, sectionCompletedCB} = this.props
    sectionCompletedCB(user, moduleNum, sectionNum)

    this.setState({ isVisible: false })
  }

  // Save
  onSave = () => {
    const { exercise, onPersistQuestionCB } = this.props

    onPersistQuestionCB(exercise.question_code)
    this.setState({ isVisible: false })
  }

  // **************************************************
  // render!
  render() {

    let { isVisible } = this.state
    const { user, sectionNum, moduleNum, answersRD, userRD, exercise } = this.props
    let currentModule = user.curr_module
    let currentSection = user.curr_section

    // Link the <exersise> to this instance of the SectionExercise Component.
    //   - onCloseModalCB() is called when exercise completes to tell us to close ModalX
    //   - isDynamic flag directs exercise to go live and take user input.  This flag
    //       doesn't exist (is undefined) in <exercise>.
    const exerciseDynamic = React.cloneElement(
      exercise,
      {
        onCloseModalCB: this.onSave,
        isDynamic: true
      }
    )

    // By default <exercise> does not have the isDynamic prop and will
    //   render itself in a static format for display in <SectionExercise>.
    //   The assignment below is only to emphasize this fact.
    const exerciseStatic = exercise

    // get the exercise's descrition
    const { description } = exerciseStatic.props

    // is this module started?
    let answer = getAnswers(answersRD, sectionNum)
    let buttonLabel = answer.length === 0 ? 'Start' : 'Continue'

    // next Module in sequence
    let next = getNextModuleSection(userRD, +moduleNum, +sectionNum)  
    let nextModule = next.moduleNum
    let nextSection = next.sectionNum || 'intro'

    return (
      <>
        {/* display instructions */ }
        {!isVisible && (
          <>
            <div>
              <span className="reading" dangerouslySetInnerHTML={{ __html: description }} />
              <hr className="divider" />
              {exerciseStatic}

              {currentModule === +moduleNum && currentSection === +sectionNum &&
                <div className="text-center">
                  <Button className="btn btn-primary" type="button" onClick={this.onclickStart}>{buttonLabel}</Button>
                  { answer.length > 0 && <SectionCompleteButton onClick={this.onComplete} /> }
                </div>
              }

              {(currentModule < +moduleNum || 
              (currentModule === +moduleNum && currentSection > +sectionNum)) &&
                <div className="text-right">
                  <Link className="btn" to={`/modules/${nextModule}/section/${nextSection}`}>Next</Link>
                </div>
              }
            </div>
          </>
        )}

        {/* display the exercise */ }  
        {isVisible && (
          <>
            <div>
              <span className="reading" dangerouslySetInnerHTML={{ __html: description }} />
              <hr className="divider" />
              { exerciseDynamic }
            </div>
          </>
        )}
      </>
    )
  }
}

export default SectionExercise