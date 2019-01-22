/**
 * @module src/store/answers/actions
 * @see {@link module:src/store/answers/consants|constants}
 */
import {
  ANSWERS_LOADING,
  ANSWERS_LOAD,
  ANSWERS_ERROR_DB,
  ANSWERS_UPDATE,
  ANSWERS_NO_OP,
} from './constants'

/**
 * @constant
 * @type {string}
 * @default
 */
const URL = process.env.REACT_APP_DB_URL || "http://localhost:3001"
const USER_ID = 1

/**
 * @function updateAnswersAC - Create action meant to override current value of answers to a question in state.
 * @see {@link persistQuestionAC|persistQuestionAC} for persistance, like dispatching an API call to the database.
 * @param {integer} question_code - Unique ID corresponding to question these answers relate to
 * @param {Array<string>} answers - One or more strings meant to answer the related question
 * @return {Object}
 * @property {string} type - ANSWERS_UPDATE
 * @property {Object} payload
 * @property {integer} payload.question_code
 * @property {Array<string>} payload.answers
 */
export const updateAnswersAC = (question_code, answers) => {
  return {
    type: ANSWERS_UPDATE,
    payload: { question_code, answers }
  }
}
/**
 * @functionloadAllAnswersAC - Create action meant to fetch user's answers for all questions from API.
 * @async
 * @see {@link NavBar|Navbar} componentDidMount for sample implementation
 * @param {integer} userId
 * @return {Object}
 * @property {string} type - ANSWERS_LOAD on success
 * @property {string} type - ANSWERS_ERROR_DB on error
 * @property {Object} payload
 * @property {Array<string>} payload.answers on success
 * @property {Array<string>} payload.error on error
 */
export const loadAllAnswersAC = (userId) => {
  console.log("loadAllAnswersAC()")

  userId = USER_ID

  return dispatch => {
    dispatch({ type: ANSWERS_LOADING })
    return fetch(`${URL}/answers/${userId}`)
      .then(response => response.json())
      .then((answers) => {
        // console.log("answers", answers)
        return dispatch({ type: ANSWERS_LOAD, payload: answers })
      })
      .catch((error) => {
        console.log("FETCH ERROR", error);
        return dispatch({ type: ANSWERS_ERROR_DB, payload: error })
      });
  }
}

/**
 * @function persistAnswersAC - Create action meant to save user's answers for one question to the API.
 * @async
 * @param {integer} userId
 * @param {integer} question_code - Unique ID corresponding to question these answers relate to
 * @param {Array<string>} answers - One or more strings meant to answer the related question
 * @example
 * <caption>Warning: The following fails because getAnswers is called before the updateAnswersAC operation updates the store.
 * You need to pass "answers" directly to persistQuestionAC.</caption>
 * this.props.dispatch(updateAnswersAC(question_code, answers))
 // BROKEN: this.props.dispatch(persistAnswersAC(question_code, getAnswers(this.props.answersRD, question_code)))
 */
export const persistAnswersAC = (userId, question_code, answers) => {
  console.log(`persistAnswersAC(${question_code})`)
  console.log("persisting: ", answers);

  userId = USER_ID

  return dispatch => {
    return fetch(`${URL}/answers/${userId}/${question_code}`, {
        method: 'POST',
        body: JSON.stringify({ answers }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(response => response.json())
      .then((message) => {
        console.log("post response message", message)
        return dispatch( { type: ANSWERS_NO_OP })
      })
      .catch((error) => {
        console.log("POST ERROR", error);
        return dispatch( { type: ANSWERS_ERROR_DB, payload: error } )
      });
  }
}
