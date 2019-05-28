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
  COMPLETION_DESC
} from './Module4Text'

import {
} from 'react-bootstrap'

/* **************************************************
   Used to test components during development
***************************************************** */
export default class Module4 extends React.Component {



  strengths_410 = [
    <ShortAnswersCT question = { { code: 410, text: `Record your top 5 strengths in the order they are reported in the VIA Survey.` } } />
]

  exercise_410 = (
    <QuestionsCT
      questionType = { QUESTION_TYPE_SHORT_ANSWERS }
      description = { QUES_410_DESC }
      subComponents = {this.strengths_410}
    />)




    strengths_420 = [
      // <ShortAnswersCT question = { { code: 420, text: `List your “embodiments” and “impediments.”` } } />,
      // <ShortAnswersCT question = { { code: 421, text: `Describe each embodiment and impediment in fuller detail.` } } />,
      // <ShortAnswersCT question = { { code: 422, text: `Choose your embodiments and impediments.` } } />,
      <ShortAnswersCT question = { { code: 420, text: `Your Signature Strengths, as listed in the previous exercise` } } />, //for this one i want to pull in those strengths as listed previously 
      <ShortAnswersCT question = { { code: 421, text: `Categorize each as an "embdiment" or "impediment"` } } />,
      <ShortAnswersCT question = { { code: 422, text: `Write a simple word or phrase for each embodiment or impediment. List as many as you'd like for each (add more rows if necessary).` } } />,
      <ShortAnswersCT question = { { code: 423, text: `Write about why each is an embodiment or impediment. Go into as much detail as you would like.` } } />
    ]
  
    exercise_420 = (
      <QuestionsCT
        questionType = { QUESTION_TYPE_STRENGTH }
        description = { QUES_420_DESC }
        subComponents = { this.strengths_420 }
      />)
  


      
      strengths_430 = [
        <ShortAnswersCT question = { { code: 430, text: `How and when have you felt the presence of each of your top 5 strengths in your life, and what were the results?` } } />,
        <ShortAnswersCT question = { { code: 431, text: `How and when have you felt their absence, and what were the results?` } } />,
        <ShortAnswersCT question = { { code: 432, text: `Does each strength resonate with you? Why or why not?` } } />,
        <ShortAnswersCT question = { { code: 433, text: `Does each strength explain anything about you that is clarifying for now or for the future?` } } />,
        <ShortAnswersCT question = { { code: 434, text: `What do you personally feel about each strength? Can you explain why each of these top 5 strengths rose to the top for you?` } } />,
      ]
    
      exercise_430 = (
        <QuestionsCT
          questionType = { QUESTION_TYPE_STRENGTH }
          description = { QUES_430_DESC }
          subComponents = {this.strengths_430}
      />)




      strengths_440 = [
        <ShortAnswersCT question = { { code: 440, text: 'List the most important overarching themes that impact how your life is most well lived from your strengths.' } } />,
        <ShortAnswersCT question = { { code: 441, text: 'Which embodiments provide you with the most personal senses of the meaning in your life?' } } />,
        <ShortAnswersCT question = { { code: 442, text: 'What people or things beyond yourself would you like to serve if you more intentionally lived through your Signature Strengths?' } } />,
        <ShortAnswersCT question = { { code: 443, text: 'What areas of personal growth are needed for you to be able to live more from your Signature Strengths?' } } />,
        <ShortAnswersCT question = { { code: 444, text: 'Which relationships that you either currently have or need to develop in the future (to any people, groups, practices, experiences, etc.) are most needed to support your living from your Signature Strengths?' } } />,
        <ShortAnswersCT question = { { code: 445, text: 'What areas of engagement could your Signature Strengths lead you to master (either in your life’s work or avocationally) in order to create a more meaningful and purposeful life?' } } />
      ]
    
      exercise_440 = (
        <QuestionsCT
          questionType = { QUESTION_TYPE_SHORT_ANSWERS }
          description = { QUES_440_DESC }
          subComponents = {this.strengths_440}
      />)


      strengths_450 = [
        <TransitionsCT question = { { code: 450, text: "Which impediments are working against you? How can you break them?" } } />,
        <TransitionsCT question = { { code: 451, text: "Which embodiments are working for you? How can you build them?" } } />,
      ]
    
      exercise_450 = (
        <QuestionsCT
          questionType = { QUESTION_TYPE_TRANSITIONS }
          description = { QUES_450_DESC }
          subComponents = {this.strengths_450}
      />)




  
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
          sectionTitle = "Identify your signature strenghts"
          exercise = {this.exercise_410}
        />

      <SectionCT
        moduleNum = { 4 }
        sectionNum = { 420 }
        sectionTitle = 'Reflect on your signature strengths'
        exercise = {this.exercise_430}
      /> 

      <SectionCT
          moduleNum = { 4 }
          sectionNum = { 430 }
          sectionTitle= 'List your “embodiments” and “impediments.”'
          exercise = {this.exercise_420}
        /> 
      

      <SectionCT
        moduleNum = { 4 }
        sectionNum = { 440 }
        sectionTitle = 'Compare your "embodiment" themes and "impediment" themes'
        exercise = {this.exercise_440}
      /> 

      <SectionCT
        moduleNum = { 4 }
        sectionNum = { 450 }
        sectionTitle = 'Break and Build'
        exercise = {this.exercise_450}
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
