import React from 'react'

import ModuleCT from '../Framework/ModuleCT'
import SectionCT from '../Framework/SectionCT'
import QuestionsCT from '../Framework/QuestionsCT'

// import LifeDescriptorsCT from '../Exercises/LifeDescriptors/LifeDescriptorsCT'
// import TransitionsCT from '../Exercises/Transitions/TransitionsCT'
// import NarrativeCT from '../Exercises/Narrative/NarrativeCT'
import ShortAnswersCT from '../Exercises/ShortAnswers/ShortAnswersCT'
// import BracketCT from '../Exercises/Bracket/BracketCT'
// import StrengthXCT from '../Exercises/StrengthXCT'


// import { persistAnswersFromQuestionAC } from '../../store/answers/actions'
// import { persistTransitionsFromQuestionAC } from '../../store/transitions/actions'
import {
  QUESTION_TYPE_SHORT_ANSWERS,
//   QUESTION_TYPE_TRANSITIONS,
//   QUESTION_TYPE_BRACKET,
//   QUESTION_TYPE_STRENGTH,
 } from '../../store/answers/constants'


import {
  MOD_5_DESC,
  QUES_510_DESC,
  QUES_520_DESC,
  QUES_530_DESC,
  QUES_540_DESC,
  QUES_550_DESC,
  QUES_560_DESC,
  QUES_570_DESC
} from './Module5Text'

import {
} from 'react-bootstrap'
import ShortAnswer from '../Exercises/ShortAnswers/ShortAnswer';

/* **************************************************
   Used to test components during development
***************************************************** */
export default class Module5 extends React.Component {



strengths_510 = [
    // <ShortAnswersCT question = { { code: 510, text: `Building your MAPmaker Dashboard` } } />,
    <ShortAnswersCT question = { { code: 510, text: `Revise and condense your Current Situation Statement` } } />,
    <ShortAnswersCT question = { { code: 511, text: `Add to your Dashboard your key themes` } } />,
    <ShortAnswersCT question = { { code: 512, text: `Summarize the context of your purpose-seeking life` } } />,
    <ShortAnswersCT question = { { code: 513, text: `Review these contextual elements of your Dashboard and write in your journal` } } />
    //under this have a fetch to get what THEY wrote in each module
]

exercise_510 = (
<QuestionsCT
    questionType = { QUESTION_TYPE_SHORT_ANSWERS }
    description = { QUES_510_DESC }
    subComponents = {this.strengths_510}
/>)


strengths_520 = [
    <ShortAnswersCT question = { { code: 520, text: `Add to your Dashboard your key insights about meaning` } } />,
    <ShortAnswersCT question = { { code: 521, text: `Add to your Dashboard your key insights about your desires` } } />,
    <ShortAnswersCT question = { { code: 522, text: `Add to your Dashboard your key insights about your strengths` } } />,
    <ShortAnswersCT question = { { code: 523, text: `Summarize who you are as a purpose seeker` } } />,
    <ShortAnswersCT question = { { code: 524, text: `Review the 'who' elements of your Dashboard and write in your journal about any insights or
     implications these elements have on your sense of who you are as a pursuer of life purpose.` } } />

]

//DONT ACTUALLY WANT THESE AS SHORT ANSWER, WANT THEM AS A DISPLAY OF THAT DATA THAT WE
//ARE FETCHING FROM THE DB

exercise_520 = (
<QuestionsCT
    questionType = { QUESTION_TYPE_SHORT_ANSWERS }
    description = { QUES_520_DESC }
    subComponents = {this.strengths_520}
/>)



strengths_530 = [
    <ShortAnswersCT question = { { code: 530, text: `Add to your Dashboard your key insights about beyond-the-self service` } } />,
    <ShortAnswersCT question = { { code: 531, text: `Summarize the 'what' of your purpose` } } />,
    <ShortAnswersCT question = { { code: 532, text: `Review the 'what' elements of your Dashboard and write in your journal about any
     insights or implications these specific perspectives have on your sense of life purpose, especially
      considering the 'who' you profiled in Exercise 2 of this module.` } } />

]

exercise_530 = (
<QuestionsCT
    questionType = { QUESTION_TYPE_SHORT_ANSWERS }
    description = { QUES_530_DESC }
    subComponents = {this.strengths_530}
/>)




strengths_540 = [
    <ShortAnswersCT question = { { code: 540, text: `Bring the Dashboard elements together into a purpose statement` } } />,
    <ShortAnswersCT question = { { code: 541, text: `Review your Purpose Statement and write in your journal about any insights
     or implications that seeing this statement has on how you want to live your life..` } } />,

]

exercise_540 = (
<QuestionsCT
    questionType = { QUESTION_TYPE_SHORT_ANSWERS }
    description = { QUES_540_DESC }
    subComponents = {this.strengths_540}
/>)




strengths_550 = [
    <ShortAnswersCT question = { { code: 550, text: `Add to your Dashboard your key commitments about personal growth` } } />,
    <ShortAnswersCT question = { { code: 551, text: `Add to your Dashboard your key commitments about relationships` } } />,
    <ShortAnswersCT question = { { code: 552, text: `Add to your Dashboard your key commitments about engagement mastery` } } />,
    <ShortAnswersCT question = { { code: 553, text: `Rank the commitments on your Dashboard and consolidate` } } />,
    <ShortAnswersCT question = { { code: 554, text: `Review the Commitments section of your Dashboard and write in your journal` } } />,

]

exercise_550 = (
<QuestionsCT
    questionType = { QUESTION_TYPE_SHORT_ANSWERS }
    description = { QUES_550_DESC }
    subComponents = {this.strengths_550}
/>)





strengths_560 = [
    <ShortAnswersCT question = { { code: 560, text: `Review and revise your Break and Build Matrix` } } />,
    <ShortAnswersCT question = { { code: 561, text: `Revise and consense your Future Desired Situation` } } />,
]

exercise_560 = (
<QuestionsCT
    questionType = { QUESTION_TYPE_SHORT_ANSWERS }
    description = { QUES_560_DESC }
    subComponents = {this.strengths_560}
/>)


strengths_570 = [
    <ShortAnswersCT question = { { code: 570 } } />,
]

exercise_570 = (
<QuestionsCT
    questionType = { QUESTION_TYPE_SHORT_ANSWERS }
    description = { QUES_570_DESC }
    subComponents = {this.strengths_570}
/>)


  
  render() {
    return (
      <div>
      <ModuleCT
        moduleNum = { 5 }
        moduleTitle = "Bringing It All Together"
        moduleDescription = { MOD_5_DESC }
      >
      <SectionCT
          moduleNum = { 5 }
          sectionNum = { 510 }
          sectionTitle = "The Context of Your Purpose"
          exercise = {this.exercise_510}
        />
      
        <SectionCT
            moduleNum = { 5 }
            sectionNum = { 520 }
            sectionTitle = "The Who of Your Purpose"
            exercise = {this.exercise_520}
        />
        

        <SectionCT
            moduleNum = { 5 }
            sectionNum = { 530 }
            sectionTitle = "The What of Your Purpose"
            exercise = {this.exercise_530}
        />
        
        <SectionCT
            moduleNum = { 5 }
            sectionNum = { 540 }
            sectionTitle = "Your Purpose Statement"
            exercise = {this.exercise_540}
        />

        <SectionCT
            moduleNum = { 5 }
            sectionNum = { 550 }
            sectionTitle = "The How of Purpose"
            exercise = {this.exercise_550}
        />

        <SectionCT
            moduleNum = { 5 }
            sectionNum = { 560 }
            sectionTitle = "Contemplate your Goals"
            exercise = {this.exercise_560}
        />

        <SectionCT
            moduleNum = { 5 }
            sectionNum = { 570 }
            sectionTitle = "Conclusion"
            exercise = {this.exercise_570}
        />  
      </ModuleCT>

      </div>
    )
  }
}
