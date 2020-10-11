import React from 'react'

import { Button } from 'react-bootstrap'
import { getUser } from '../../store/user/reducer'
import { connect } from 'react-redux'
import { sectionCompletedAC } from '../../store/user/actions'

const SectionCompleteButton = ( { user, onClick } ) => {
  const currentModule = +(user.curr_module)
  const currentSection = +(user.curr_section)

  const onComplete = () => {
    // save data
    onClick()

    // save next section
    sectionCompletedAC(user, currentModule, currentSection)
  }

  return (
    <Button type="button" onClick={onComplete}>Complete</Button>
  )
}

const mapStateToProps = ( state, passedProps ) => {
  const user = getUser(state.userRD)

  return {
    user
  }
}

export default connect(mapStateToProps)(SectionCompleteButton)
