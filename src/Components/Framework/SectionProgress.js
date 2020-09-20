import React from 'react'

const SectionProgress = (currentModule, currentSection, moduleId, sectionId) => {
  // past module OR current mod, past section
  if (moduleId < currentModule || (moduleId == currentModule && sectionId < currentSection)) {
    return (<i className={`glyphicon glyphicon-ok-sign text-success`}></i>)
  }
  // current section
  else if (sectionId === currentSection && sectionId === currentSection) {
    return (<i className={`glyphicon glyphicon-adjust`}></i>)
  }
  // not started
  else {
    return (<i className={`glyphicon glyphicon-unchecked`}></i>)
  }
}

export default SectionProgress


