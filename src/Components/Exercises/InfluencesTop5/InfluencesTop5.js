import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
} from 'react-bootstrap'
import {
  GROUP_PERSONAL,
  GROUP_SOCIAL,
  GROUP_WIDER, 

  SELECTED,
} from '../Influences/InfluencesConstants.js'
import InfluenceTop5 from './InfluenceTop5'
import { UUID } from '../../Utils/UUID'


/* **************************************************
   InfluencesTop5 component

   Displays three sections for entering an influence
     -- three sections
     -- Save button

   state:
    isDirty -- decide if we need to persist to db
    allInfluencesWithKeys --
      [ key: 1,
        item: { 
          relationship:'brother', 
          name:"Tim", 
          belief:"Charity", 
          impact:"supportive",
          selected:'selected'}, 
        {...},
      ]

   props:
     userId
     question -- { code: 50, text: "Question 50" }
     instructions
     impactFilter -- user wull select from IMPACT_SUPPORTIVE or IMPACT_INHIBITING  influences
     allInfluences --  see above
     isDynamic -- undefined - render static version in <PopUp>
                  true - render dynamic version <ModalX>
     onPersistCB() -- callback to update the store and persist data
     onCloseModalCB -- when user clicks Close button
***************************************************** */
export default class InfluencesTop5 extends React.Component {
  

  uuid = new UUID() // provides unique keys for <ShortAnswer> components

  state = {
    isDirty: false,
    allInfluencesWithKeys: this.uuid.addKeys(this.props.allInfluences),
  }

  // **********************************************
  componentDidMount = () => {
  }

  // **********************************************
  onclickClose = () => {
    console.log( "Influences::onclickClose()" )

    const { userId, onPersistCB, onCloseModalCB } = this.props
    const { isDirty, allInfluencesWithKeys } = this.state

    if (isDirty)
      onPersistCB(
        userId,
        this.uuid.stripKeys(allInfluencesWithKeys)
      )

    onCloseModalCB()
  }

  // **********************************************
  updateInfluence = (keyToUpdate, newInfluence) => {
    console.log(`InfluencesTop5::updateData()`)

    const { allInfluencesWithKeys } = this.state

    const newAllInfluencesWithKeys = allInfluencesWithKeys.map((influenceWithKey) =>
      (influenceWithKey.key === keyToUpdate) ? { key: keyToUpdate, item: newInfluence } : influenceWithKey)

    this.setState({
      isDirty: true,
      allInfluencesWithKeys: newAllInfluencesWithKeys,
    })
  }

  // **********************************************
  // render!
  render() {
    console.log("InfluencesTop5::render()")
    console.log("this.props.influences", this.props.influences)

    const { question, impactFilter, instructions, isDynamic } = this.props

    const { allInfluencesWithKeys } = this.state

    // filter to just the influences matching the impactFilter
    const impactInfluencesWithKeys = allInfluencesWithKeys.filter(influenceWithKey =>
      influenceWithKey.item.impact === impactFilter
    )

    // static render
    if (!isDynamic) {
      const selectedInfluencesWithKeys = impactInfluencesWithKeys.filter(influenceWithKey =>
        influenceWithKey.item.selected === SELECTED
      )
      if (selectedInfluencesWithKeys.length === 0)
        return <p>&nbsp;&nbsp;&nbsp;&nbsp;no data</p>

      return (
        <>
          <table>
            <tbody>
              {selectedInfluencesWithKeys.map(influenceWithKey =>
                <InfluenceTop5 
                    key={influenceWithKey.key}
                    id={influenceWithKey.key}
                    influence={influenceWithKey.item}
                    isDynamic={isDynamic}
                    updateInfluenceCB={this.updateInfluence}
                />
              )}
            </tbody>
          </table>
          <br></br>
        </>
      )
    }

    // dynamic render
    return (
      <>
        <p>{instructions}</p>
        {impactInfluencesWithKeys.map(influenceWithKey =>
          <InfluenceTop5 
            key={influenceWithKey.key}
            id={influenceWithKey.key}
            influence={influenceWithKey.item}
            isDynamic={isDynamic}
            updateInfluenceCB={this.updateInfluence}
          />
        )}
        <br/>
        <Button type="button" onClick={this.onclickClose}>Close</Button>
      </>
    )
  }
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// InfluencesTop5.propTypes = {
//   question: PropTypes.shape( {
//     code: PropTypes.number.isRequired,
//     text: PropTypes.string.isRequired,
//   } ).isRequired,
//   influences: PropTypes.object.isRequired,
//   isDynamic: PropTypes.bool,
//   onUpdateAnswerCB: PropTypes.func,  // required, injected by <Popup>
// }

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
