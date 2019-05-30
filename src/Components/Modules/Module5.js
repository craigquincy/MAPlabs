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
    <ShortAnswersCT question = { { code: 510, text: `Revise and consolidate this statement down into a simple, 
    to-the-point synopsis of only the most important concepts in a few sentences below. 
    Here's what you wrote: //FETCH THEIR PREVIOUS RESPONSE` } } />,
    <ShortAnswersCT question = { { code: 511, text: `Add to your Dashboard your key themes. Review your themes to consider 
    how accurately they reflect your current self-knowledge and understanding.` } } />,
    <ShortAnswersCT question = { { code: 512, text: `Summarize the context of your purpose-seeking life. 
    Add any summarizing thoughts or directives that you feel will be helpful to you in the future as a quick reference, 
    reminder, or accountability statement about your key themes.` } } />,
]

exercise_510 = (
<QuestionsCT
    questionType = { QUESTION_TYPE_SHORT_ANSWERS }
    description = { QUES_510_DESC }
    subComponents = {this.strengths_510}
/>)


strengths_520 = [
    <ShortAnswersCT question = { { code: 520, text: `Add to your Dashboard your key insights about meaning. 
    Review your responses about what you found most meaningful. 
    Here's what you wrote: //FETCH THEIR PREVIOUS RESPONSE` } } />,
    <ShortAnswersCT question = { { code: 521, text: `Choose only the 5 most critical themes above
    and copy them into the boxes below. You may also revise the statements to better fit with your 
    current self-knowledge and understanding.` } } />,
    <ShortAnswersCT question = { { code: 522, text: `Add to your Dashboard your key insights about your desires. 
    Review your Desires Statement below
    and revise or edit it to more accurately reflect your current self-knowledge and understanding. If possible, 
    consolidate your statement down into a simple, to-the-point synopsis of only the most important desires in a 
    few sentences. Here's what you wrote: //FETCH FOR DESIRES STATEMENT` } } />,
    <ShortAnswersCT question = { { code: 523, text: `Add to your Dashboard your key insights about your strengths.
     Review your responses about what you found most meaningful and consider how accurately they reflect your current 
     self-knowledge and understanding. //fetch and display top 5 strenghts, embodiment
    themes, impediment themes ` } } />,
    <ShortAnswersCT question = { { code: 524, text: `Choose only the most critical strengths and themes 
    from question #4 and copy them into the boxes below. You may also revise the statements to better fit with 
    your current self-knowledge and understanding. //NEED THREE BOXES THERE THEY CAN
    ENTER THEIR STRENGHTS (4), EMBODIMENTS (4), IMPEDIMENTS (4)` } } />
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
    <ShortAnswersCT question = { { code: 530, text: `Add to your Dashboard your key insights about beyond-the-self service. 
    Review your beyond-the-self service themes to consider how accurately they reflect your current 
    self-knowledge and understanding. //FETCH FOR PREVIOUS THEMES WRITTEN` } } />,
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
    <ShortAnswersCT question = { { code: 540, text: `Bring the Dashboard elements together into a purpose statement. 
    Review your beyond-the-self service themes to consider how accurately they reflect your current self-knowledge 
    and understanding. //FETCH THEIR THEMES FROM PREVIOUS MODULES` } } />,
    <ShortAnswersCT question = { { code: 541, text: `Choose only the 5 most critical themes above 
    and copy them into the boxes below. You may also revise the statements to better fit with 
    your current self-knowledge and understanding. You may revise your themes in the boxes below.` } } />,
    <ShortAnswersCT question = { { code: 541, text: `Summarize the "what" of your purpose. Add any summarizing thoughts 
    or directives that you feel will be helpful to you in the future as a quick reference, reminder, or 
    accountability statement about what you care about and want to serve that is beyond yourself.` } } />
]

exercise_540 = (
<QuestionsCT
    questionType = { QUESTION_TYPE_SHORT_ANSWERS }
    description = { QUES_540_DESC }
    subComponents = {this.strengths_540}
/>)




strengths_550 = [
    <ShortAnswersCT question = { { code: 550, text: `Consider all of the elements on your Dashboard. 
    Then articulate your own personal life purpose statement. Review the items on your Dashboard on the last tab in 
    this workbook and then fill out the Purpose Statement below.
    <br><br>
    My life is most meaningful when I experience or embrace<br>____(Source(s) of meaning)_______.
    That is why my greatest desire is to<br>_____(Desire)______.
    by using my<br>_____(Strengths)______.
    in service of<br>_____(Something or someone beyond the self)______.
    ` } } />,

]

exercise_550 = (
<QuestionsCT
    questionType = { QUESTION_TYPE_SHORT_ANSWERS }
    description = { QUES_550_DESC }
    subComponents = {this.strengths_550}
/>)





strengths_560 = [
    <ShortAnswersCT question = { { code: 560, text: `Add to your Dashboard your key commitments about personal growth.
    Review your personal growth commitments to consider how accurately they reflect your current self-knowledge and understanding.
    //WHAT YOU WROTE FROM M1-M4
    ` } } />,
    <ShortAnswersCT question = { { code: 561, text: `Choose only the 5 most critical themes in column C and copy them into the boxes below. 
    You may also revise the statements to better fit with your current self-knowledge and understanding. 
    You may revise your themes in the boxes below.` } } />,
    <ShortAnswersCT question = { { code: 562, text: `Add to your Dashboard your key relationships.
    Review your relationships to consider how accurately they reflect your current self-knowledge and understanding.
    You may revise your themes in the boxes below.` 
    } } />,
    <ShortAnswersCT question = { { code: 563, text: `Add to your Dashboard your key engagement mastery. Review your 
    engagement mastery to consider how accurately these themes reflect your current self-knowledge and understanding.
    //ADD IN EVERYTHING THEY WROTE FOR M1-M4 (???)` 
    } } />,
    <ShortAnswersCT question = { { code: 564, text: `Choose only the 5 most critical themes in column O (????) and copy 
    them into the boxes below. You may also revise the statements to better fit with your current 
    self-knowledge and understanding. You may revise your themes in the boxes below.` 
    } } />
]

exercise_560 = (
<QuestionsCT
    questionType = { QUESTION_TYPE_SHORT_ANSWERS }
    description = { QUES_560_DESC }
    subComponents = {this.strengths_560}
/>)


strengths_570 = [
    <ShortAnswersCT question = { { code: 570, text: `Review your responses to how
    you would like to alter how you engage with the following: HOW ARE WE GOING TO FORMAT THIS SECTION??`} } />,
    <ShortAnswersCT question = { { code: 571, text: `Choose only the 10 most critical changes from columns G and I 
    and copy them into the boxes below. You may also revise the statements to better fit with your current self-knowledge 
    and understanding. HOW ARE WE GOING TO FORMAT THIS SECTION??`} } />,
    <ShortAnswersCT question = { { code: 572, text: `Review and revise your Desired Future Situation statement. Revise 
    and consolidate this statement down into a simple, to-the-point synopsis of only the most important concepts 
    in a few sentences. Here's what you wrote: //FETCH FOR THEIR RESPONSE//

    You may revise your statement in the box below.
    `} } />,
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
            sectionTitle = "Review your Break and Build Matrix"
            exercise = {this.exercise_570}
        />  
      </ModuleCT>

      </div>
    )
  }
}
