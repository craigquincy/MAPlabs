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
  COMPLETION_DESC
} from './Module4Text'

import {
} from 'react-bootstrap'

/* **************************************************
   Used to test components during development
***************************************************** */
export default class Module4 extends React.Component {



  strengths_410 = [
    <ShortAnswersCT question = { { code: 410, text: `Record your top 5 strengths and reflect on each.` } } />,
    <ShortAnswersCT question = { { code: 411, text: `Now, reflect broadly and generally on each of the strengths you listed in the field provided. The goal for the remainder of today is to simply get you thinking about what these strengths
are and whether you have seen them surface in your life. To help you reflect on them, here
are some prompts:
How and when have you felt the presence of each of your top 5 strengths in your life, and what were the results?
How and when have you felt their absence, and what were the results?
Does each strength resonate with you? Why or why not?
Does each strength explain anything about you that is clarifying for now or for the future?
What do you personally feel about each strength? Can you explain why each of these top 5 strengths rose to the top for you?`} } />,
]

  exercise_410 = (
    <QuestionsCT
      questionType = { QUESTION_TYPE_SHORT_ANSWERS }
      description = { QUES_410_DESC }
      subComponents = {this.strengths_410}
    />)




    strengths_420 = [
      <ShortAnswersCT question = { { code: 420, text: `List your “embodiments” and “impediments.”` } } />,
      <ShortAnswersCT question = { { code: 421, text: `Describe each embodiment and impediment in fuller detail.` } } />,
      <ShortAnswersCT question = { { code: 422, text: `Choose your embodiments and impediments.` } } />,

    ]
  
    exercise_420 = (
      <QuestionsCT
        questionType = { QUESTION_TYPE_STRENGTH }
        description = { QUES_420_DESC }
        subComponents = { this.strengths_420 }
      />)
  




      strengths_430 = [
        <ShortAnswersCT question = { { code: 430, text: `Explain your ranking.` } } />,
        <ShortAnswersCT question = { { code: 431, text: `Synthesize your findings into themes.` } } />,
      ]
    
      exercise_430 = (
        <QuestionsCT
          questionType = { QUESTION_TYPE_STRENGTH }
          description = { QUES_430_DESC }
          subComponents = {this.strengths_430}
      />)





      strengths_440 = [
        <ShortAnswersCT question = { { code: 440, text: `*NEED STRUCTURE FOR THIS* Compare your “embodiment” themes to your “impediment” themes.` } } />,
        <ShortAnswersCT question = { { code: 441, text: `*NEED STRUCTURE FOR THIS* Establish which should be broken and which should be built.` } } />,
      ]
    
      exercise_440 = (
        <QuestionsCT
          questionType = { QUESTION_TYPE_STRENGTH }
          description = { QUES_440_DESC }
          subComponents = {this.strengths_440}
      />)





      // strengths_450 = [
      //   <StrengthXCT question = { { code: 450, text: "Compare your “embodiment” themes to your “impediment” themes.  Review and compare the “embodiment” and “impediment” themes from Exercise 3B.  Look for ways in which the two statements reflect each other, and for ways in which they reflect differing things from each other." } } />,
      //   // <StrengthXCT question = { { code: 412, text: "question 412" } } />,
      // ]
    
      // exercise_450 = (
      //   <QuestionsCT
      //     questionType = { QUESTION_TYPE_STRENGTH }
      //     description = { QUES_450_DESC }
      //     subComponents = {this.strengths_450}
      // />)




      
      // strengths_460 = [
      //   <StrengthXCT question = { { code: 460, text: "FIX THIS STRENGTHS 460" } } />,
      //   // <StrengthXCT question = { { code: 412, text: "question 412" } } />,
      // ]
    
      // exercise_460 = (
      //   <QuestionsCT
      //     questionType = { QUESTION_TYPE_BRACKET }
      //     description = { QUES_460_DESC }
      //     subComponents = {this.strengths_460}
      // />)
    
  
  

  render() {
    return (
      <div>
      <ModuleCT
        moduleNum = { 4 }
        moduleTitle = "Your Meanings and Motivations"
        moduleDescription = { MOD_4_DESC }
      >
      <SectionCT
          moduleNum = { 4 }
          sectionNum = { 410 }
          sectionTitle = "Identify your strenghts"
          exercise = {this.exercise_410}
        />

      <SectionCT
          moduleNum = { 4 }
          sectionNum = { 420 }
          sectionTitle= "Acting on your signature strengths"
          exercise = {this.exercise_420}
        /> 
      
      <SectionCT
        moduleNum = { 4 }
        sectionNum = { 430 }
        sectionTitle = 'Dig into your themes'
        exercise = {this.exercise_430}
      /> 

      <SectionCT
        moduleNum = { 4 }
        sectionNum = { 440 }
        sectionTitle = 'Compare your "embodiment" themes and "impediment" themes'
        exercise = {this.exercise_440}
      /> 


      </ModuleCT>
      <ModuleCT
        moduleNum = { '4 is complete!' }
        // moduleTitsle = 'Congratulations on completing Module 4'
        moduleDescription = { COMPLETION_DESC }
      />

      </div>
    )
  }
}
