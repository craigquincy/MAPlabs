/**
 * @module src/store/answers/reducer
 * @see {@link module:src/store/answers/consants|constants}
 */
import {
  ANSWERS_LOADING,
  ANSWERS_LOAD,
  ANSWERS_UPDATE,
  ANSWERS_ERROR_DB,
  ANSWERS_NO_OP,
 } from './constants';

/**
 *   @typedef {Object} store.state.answersRD
 *   @property {boolean} isLoading=true
 *   @property {boolean} isError=false
 *   @property {string} errorMessage=''
 *   @property {Object.<integer, Array<string>>} questions={} - Variable number of answer arrays keyed by integer (expected to be question ID)
 *   @example
 *    //One possible instance of store.state.answersRD
 *    answersRD: {
 *    isLoading: true,
 *    isError: false,
 *    errorMessage: '',
 *    questions: {
 *      1: [ 'answer one', 'answer two' ],
 *      2: [ 'this is a narrative, so only one answer' ],
 *       },
 *     }
 */

/**
 *   @constant
 *   @type {store.state.answersRD}
 *   @default
 */
const initialState = {
  isLoading: true,
  isError: false,
  errorMessage: '',
  questions: {},
}

/**
 *   @function getAnswers - Get array of zero or more strings representing answers to one question for a given question_code
 *   @param {store.state.answersRD} state - local slice of global state, @see {@link module:src/store/answers/reducer~store.state.answersRD|Type Definition}
 *   @param {integer} question_code - Expected to be unique ID corresponding to a question
 *   @return {Array<string|undefined>} - Zero or more strings meant to answer the related question
 */
export const getAnswers = (state, question_code) =>
  state.questions[question_code] || []

/**
 *   @function answersRD
 *   @param {store.state.answersRD} state - local slice of global state, @see {@link module:src/store/answers/reducer~store.state.answersRD|Type Definition}
 *   @param {Object} action
 *   @property {string} type - Expected to match one of the {@link module:src/store/answers/consants|Constants}
 *   @property {*} [payload]
 *   @return {store.state.answersRD}
 */
export const answersRD = (state = initialState, action) => {

  const { type, payload } = action

  switch(type) {

    // Reset the reducer to initial state, could be
    //   used when switching users.
    case ANSWERS_LOADING:
      console.log("answersRD::LOADING");
      return initialState;

      /**
     * @param {Object} ANSWERS_LOAD_ACTION
     * @property {Object.<integer, Array<string>>} payload
     * @example
     * {
     *    1: [ 'answer one', 'answer two' ],
     *    2: [ 'this is a narrative, so only one answer' ],
     *  }
     */
    case ANSWERS_LOAD:
      console.log("answersRD::LOAD");
      return {
        ...state,
        isLoading: false,
        questions: payload,
      };

    /**
     * @param {Object} ANSWERS_UPDATE_ACTION
     * @property {Object} payload
     * @property {integer} payload.question_code
     * @property {Array<string>} payload.answers
     * @example
     * { question_code: 6, answers: ["one", "two"] }
     */
    case ANSWERS_UPDATE:
      console.log("answersRD::UPDATE");
      const newQuestions = { ...state.questions };
      newQuestions[payload.question_code] = payload.answers
      return {
        ...state,
        questions: newQuestions,
      };

    /**
     * @param {Object} ANSWERS_ERROR_DB_ACTION - likely an error in a fetch request
     * @property {string} [payload='no error message provided']
     */
    case ANSWERS_ERROR_DB:
      console.log("answersRD::ERROR_DB");
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload || "no error message provided",
      }

      // no operation, AC didn't change stat
      case ANSWERS_NO_OP:
        console.log("answersRD::NO_OP")
        return state

    default:
      return state
   }
 }

 export default answersRD
