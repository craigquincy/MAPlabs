// need to mege with the user info coming from login


/*
  uiRD: {

  }
*/

const initialState = {

}

/* ***********************************************
   isLoading()

   Check if all the reducers with async loads are done

   return -- t/f
************************************************** */
export const isLoading = ( store ) => {
  return ( store.staticdataRD.isLoading
    || store.answersRD.isLoading )
}

/* ***********************************************
  uiRD
************************************************** */
export const uiRD = ( state = initialState, action ) => {

  const { type, payload } = action

  switch( type ) {

    default:
      return state
   }
 }

 export default uiRD
