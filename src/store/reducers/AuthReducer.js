import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from '../actions/types'
import {
  FIRSTNAME_CHANGED,
  LASTNAME_CHANGED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions'

const INITIAL_STATE = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  lifeDecriptors : [
  {
    "order": 1,
    "descr": "My life # feel full of meaning",
    "a": "does",
    "b": "does not"
  },
  {
    "order": 2,
    "descr": "I # satisfied with my life",
    "a": "am",
    "b": "am not"
  },
  {
    "order": 3,
    "descr": "I # feel bored or apathetic",
    "a": "rarely",
    "b": "often"
  },
  {
    "order": 4,
    "descr": "I # generally optimistic and hopeful",
    "a": "am",
    "b": "am not"
  },
  {
    "order": 5,
    "descr": "I # feel anxious",
    "a": "rarely",
    "b": "often"
  },
  {
    "order": 6,
    "descr": "I # know what I desire in the future",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 7,
    "descr": "I # in control",
    "a": "am",
    "b": "am not"
  },
  {
    "order": 8,
    "descr": "I # feel joy in my life",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 9,
    "descr": "I # feel depressed",
    "a": "rarely",
    "b": "often"
  },
  {
    "order": 10,
    "descr": "I # living my optimal life",
    "a": "am",
    "b": "am not"
  },
  {
    "order": 11,
    "descr": "I # feel a healthy self-esteem",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 12,
    "descr": "I am # learning and growing",
    "a": "rarely",
    "b": "often"
  },
  {
    "order": 13,
    "descr": "I # open to new experiences",
    "a": "am",
    "b": "am not"
  },
  {
    "order": 14,
    "descr": "I # have supportive relationships",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 15,
    "descr": "I # have a clear vision of what I am working for",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 16,
    "descr": "I # feel motivated in my day-to-day life",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 17,
    "descr": "I # feel that my life has impact beyond myself",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 18,
    "descr": "My life # fulfilling",
    "a": "is",
    "b": "is not"
  },
  {
    "order": 19,
    "descr": "I # feel love in my life",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 20,
    "descr": "I # understand why I'm living my life",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 21,
    "descr": "I # feel successful in my life",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 22,
    "descr": "I # feel passive",
    "a": "rarely",
    "b": "often"
  },
  {
    "order": 23,
    "descr": "I # feel a sense of life purpose",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 24,
    "descr": "I # have enthusiasm for my life",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 25,
    "descr": "I # feel stress",
    "a": "rarely",
    "b": "often"
  },
  {
    "order": 26,
    "descr": "I # flourishing",
    "a": "am",
    "b": "am not"
  },
  {
    "order": 27,
    "descr": "My life # feel positive",
    "a": "does",
    "b": "does not"
  },
  {
    "order": 28,
    "descr": "I # make choices from deep self-knowledge",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 29,
    "descr": "I # feel happy",
    "a": "rarely",
    "b": "often"
  },
  {
    "order": 30,
    "descr": "I # feel engaged in my life",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 31,
    "descr": "I # accept myself for who I am",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 32,
    "descr": "I # follow my curiosity",
    "a": "rarely",
    "b": "often"
  },
  {
    "order": 33,
    "descr": "I # have meaningful goals in life that I work toward",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 34,
    "descr": "I # committed to important things in my life",
    "a": "am",
    "b": "am not"
  },
  {
    "order": 35,
    "descr": "I # cultivate my emotional, spiritual, or soulful self",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 36,
    "descr": "I # know how I fit into the grand scheme of things",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 37,
    "descr": "My motivations # come from me, not others",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 38,
    "descr": "I # feel positively challenged in my life",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 39,
    "descr": "I # feel overwhelmed",
    "a": "rarely",
    "b": "often"
  },
  {
    "order": 40,
    "descr": "My life # authentic",
    "a": "is",
    "b": "is not"
  },
  {
    "order": 41,
    "descr": "I # reaching my potential",
    "a": "am",
    "b": "am not"
  },
  {
    "order": 42,
    "descr": "I # feel insecure",
    "a": "rarely",
    "b": "often"
  },
  {
    "order": 43,
    "descr": "I # feel like I belong",
    "a": "do",
    "b": "do not"
  },
  {
    "order": 44,
    "descr": "I # feel despair",
    "a": "rarely",
    "b": "often"
  },
  {
    "order": 45,
    "descr": "I # live from my personal strengths",
    "a": "rarely",
    "b": "often"
  },
  {
    "order": 46,
    "descr": "My life # feels creative",
    "a": "rarely",
    "b": "often"
  },
  {
    "order": 47,
    "descr": "I # satisfied with my work ",
    "a": "am",
    "b": "am not"
  },
  {
    "order": 48,
    "descr": "I # pursue my interests",
    "a": "rarely",
    "b": "often"
  },
  {
    "order": 49,
    "descr": "I # feel a sense of accomplishment in my life",
    "a": "rarely",
    "b": "often"
  },
  {
    "order": 50,
    "descr": "I # feel empowered",
    "a": "do",
    "b": "do not"
  }
],

  user: null,
  error: '',
  loading: false,

}

export default (state = INITIAL_STATE, action) => {
  // console.log(action)

  switch (action.type) {
    case FIRSTNAME_CHANGED:
    console.log(action.payload, typeof action.payload)
      return{...state, first_name: action.payload}
    case LASTNAME_CHANGED:
    console.log(action.payload, typeof action.payload)
      return{...state, last_name: action.payload}
    case EMAIL_CHANGED:
      console.log(action.payload, typeof action.payload)
      return {...state, email: action.payload }
    case PASSWORD_CHANGED:
    console.log(action.payload, typeof action.payload)
      return {...state, password: action.payload }
    case LOGIN_USER:
      return {...state, loading: true, error: '' }
    case LOGIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.payload }
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false }

    default:
      return state
  }
}
