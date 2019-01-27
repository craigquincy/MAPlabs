import React from 'react'
import Popup from '../Components/Popup'
import {
  Button,
  Checkbox,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Panel,
} from 'react-bootstrap'
import '../CSS/Section.css'
/* **************************************************
   Section

   Shows / hides a section depending on user's curr_module / curr_section

   props:
     user -- the complete user object to check the furthest mod/sec they've gotten to
     moduleNum -- integer, the module this section is in (1-based)
     sectionNum -- integer, the section
     sectionTitle -- title of the section
     exercise -- component user will interact with
***************************************************** */
export default class Section extends React.Component {

  // check that user has gotten up to this module and section
  canUserView = ( user, moduleNum, sectionNum ) => {
    if ( moduleNum < user.curr_module ) return true
    if ( user.curr_module < moduleNum ) return false
    return sectionNum <= user.curr_section
  }

  state = {
    isVisible: this.canUserView(
      this.props.user,
      this.props.moduleNum,
      this.props.sectionNum ),
  }

  render() {
    console.log( "Section::render()" )

    let { isVisible } = this.state
    let { moduleNum, sectionNum, sectionTitle, exercise } = this.props

    return (
      <div>
        <Panel bsStyle='primary'>
          <Panel.Heading className="sectionHeader">
            <Panel.Title><div className="text-center">{sectionTitle}</div></Panel.Title>
          </Panel.Heading>
          {isVisible && (
            <Panel.Body className="sectionBody">

              <Popup moduleNum={moduleNum} sectionNum={sectionNum} sectionTitle={sectionTitle} exercise={exercise} />
            </Panel.Body>
          )}
          {!isVisible && (
            <p>not availble yet</p>
          )}
        </Panel>
      </div >
    )
  }
}
//  <>
//         <p>.</p>
//         <p>-----------------------------------------</p>
//         <h4><u>Section</u>: {sectionTitle}</h4>
//         {!isVisible && (
//           <p>not available yet</p>
//         )}
//         {isVisible && (
//           <>
//             <Popup sectionTitle = {sectionTitle} exercise = {exercise} />
//           </>
//         )}
//       <p> </p>
//       </>
