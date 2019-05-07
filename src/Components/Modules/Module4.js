import React from 'react'

import ModuleCT from '../Framework/ModuleCT'
import SectionCT from '../Framework/SectionCT'
import QuestionsCT from '../Framework/QuestionsCT'

import LifeDescriptorsCT from '../Exercises/LifeDescriptors/LifeDescriptorsCT'
import TransitionsCT from '../Exercises/Transitions/TransitionsCT'
import NarrativeCT from '../Exercises/Narrative/NarrativeCT'
import ShortAnswersCT from '../Exercises/ShortAnswers/ShortAnswersCT'
import BracketCT from '../Exercises/Bracket/BracketCT'
import StrengthXCT from '../Exercises/StrengthXCT'


// import { persistAnswersFromQuestionAC } from '../../store/answers/actions'
// import { persistTransitionsFromQuestionAC } from '../../store/transitions/actions'
import {
  QUESTION_TYPE_SHORT_ANSWERS,
  QUESTION_TYPE_TRANSITIONS,
  QUESTION_TYPE_BRACKET,
  QUESTION_TYPE_STRENGTH,
 } from '../../store/answers/constants'


import {
  MOD_4_DESC,
  QUES_410_DESC,
  QUES_420_DESC,
  QUES_430_DESC,
  QUES_440_DESC,
  QUES_450_DESC,
  QUES_460_DESC,
} from './Module4Text'

import {
} from 'react-bootstrap'

/* **************************************************
   Used to test components during development
***************************************************** */
export default class Module4 extends React.Component {


  strengths_410 = [
    <StrengthXCT question = { { code: 410, text: `Enter your top 5 strengths from the cell's drop down menu in the order they are reported in the VIA Survey` } } />,
    <StrengthXCT question = { { code: 411, text: `Reflect broadly and generally on each of the strengths you listed. Refer to the questions in the PDF for prompts.` } } />,
  ]

  exercise_410 = (
    <QuestionsCT
      questionType = { QUESTION_TYPE_STRENGTH }
      description = { QUES_410_DESC }
      subComponents = {this.strengths_410}
    />)

    strengths_420 = [
      <StrengthXCT question = { { code: 420, text: `List your “embodiments” and “impediments.”` } } />,
      <StrengthXCT question = { { code: 421, text: `Describe each embodiment and impediment in fuller detail.` } } />,
      <StrengthXCT question = { { code: 422, text: `Choose your embodiments and impediments.` } } />,

    ]
  
    exercise_420 = (
      <QuestionsCT
        questionType = { QUESTION_TYPE_STRENGTH }
        description = { QUES_420_DESC }
        subComponents = { this.strengths_420 }
      />)
  

      strengths_430 = [
        <StrengthXCT question = { { code: 430, text: `Explain your ranking.` } } />,
        <StrengthXCT question = { { code: 431, text: `Synthesize your findings into themes.` } } />,
      ]
    
      exercise_430 = (
        <QuestionsCT
          questionType = { QUESTION_TYPE_STRENGTH }
          description = { QUES_430_DESC }
          subComponents = {this.strengths_430}
      />)


      strengths_440 = [
        <StrengthXCT question = { { code: 440, text: `Compare your “embodiment” themes to your “impediment” themes.  Review and compare the “embodiment” and “impediment” themes from Exercise 3B.  Look for ways in which the two statements reflect each other, and for ways in which they reflect differing things from each other.` } } />,
        <StrengthXCT question = { { code: 441, text: `Breaking and building.  In order to create more personal Environmental mastery, consider which impediments are working against you mastering your strengths and need to be “broken from,” and which types of embodiments are most expressive of your strengths and need to be “built toward.” Fill in the following blanks:` } } />,
        // <StrengthXCT question = { { code: 412, text: "question 412" } } />,
      ]
    
      exercise_440 = (
        <QuestionsCT
          questionType = { QUESTION_TYPE_STRENGTH }
          description = { QUES_440_DESC }
          subComponents = {this.strengths_440}
      />)


      strengths_450 = [
        <StrengthXCT question = { { code: 450, text: "Compare your “embodiment” themes to your “impediment” themes.  Review and compare the “embodiment” and “impediment” themes from Exercise 3B.  Look for ways in which the two statements reflect each other, and for ways in which they reflect differing things from each other." } } />,
        // <StrengthXCT question = { { code: 412, text: "question 412" } } />,
      ]
    
      exercise_450 = (
        <QuestionsCT
          questionType = { QUESTION_TYPE_STRENGTH }
          description = { QUES_450_DESC }
          subComponents = {this.strengths_450}
      />)


      strengths_460 = [
        <StrengthXCT question = { { code: 460, text: "FIX THIS STRENGTHS 460" } } />,
        // <StrengthXCT question = { { code: 412, text: "question 412" } } />,
      ]
    
      exercise_460 = (
        <QuestionsCT
          questionType = { QUESTION_TYPE_BRACKET }
          description = { QUES_460_DESC }
          subComponents = {this.strengths_460}
      />)
    
  
  

  render() {
    return (
      <ModuleCT
        moduleNum = { 4 }
        moduleTitle = "Your Meanings and Motivations"
        moduleDescription = { MOD_4_DESC }
      >
      <SectionCT
          moduleNum = { 4 }
          sectionNum = { 410 }
          sectionTitle = "Identify your strenghts //exercise 1"
          exercise = {this.exercise_410}
        />

      <SectionCT
          moduleNum = { 4 }
          sectionNum = { 420 }
          sectionTitle= "Signature Strengths //exercise 2"
          exercise = {this.exercise_420}
        /> 
      
      <SectionCT
        moduleNum = { 4 }
        sectionNum = { 430 }
        sectionTitle = ' insert title //exercise 3'
        exercise = {this.exercise_430}
      /> 

      <SectionCT
        moduleNum = { 4 }
        sectionNum = { 440 }
        sectionTitle = 'insert title //exercise 3a'
        exercise = {this.exercise_440}
      /> 

      <SectionCT
        moduleNum = { 4 }
        sectionNum = { 450 }
        sectionTitle = 'insert title //exercise 4'
        exercise = {this.exercise_450}
      /> 

      {/* Not sure how else to format the conclusion: */}
      <div>
        { QUES_460_DESC } 
      </div>



      </ModuleCT>
    )
  }
}
