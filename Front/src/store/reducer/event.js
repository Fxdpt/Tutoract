// --- initial state
const initialState = {
  techEvents: [],
  id: null,
  techs: [],
  techName: '',
  redirect: false,
  topic: '',
  eventId: null,
};

// --- action types
export const GET_EVENT = 'GET_EVENT';
export const SET_EVENT = 'SET_EVENT';
export const GET_MAIN_TECHS = 'GET_MAIN_TECHS';
export const SET_TECHS = 'SET_TECHS';
export const SEND_TECH_ID = 'SEND_TECH_ID';
export const SEND_TOPIC = 'SEND_TOPIC';
export const SET_TOPIC = 'SET_TOPIC';
const SET_EVENT_ID = 'SET_EVENT_ID';
const REDIRECTION_ON = 'REDIRECTION_ON';
const REDIRECTION_OFF = 'REDIRECTION_OFF';
// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_EVENT:
      return {
        ...state,
        techEvents: action.techsEvent,
      };
    case SET_TECHS:
      return {
        ...state,
        techs: action.techs,
      };
    case SEND_TECH_ID:
      return {
        ...state,
        id: action.techId,
        techName: action.techName,
      };
    case REDIRECTION_ON:
      return {
        ...state,
        redirect: true,
      };
    case REDIRECTION_OFF:
      return {
        ...state,
        redirect: false,
      };
    case SEND_TOPIC:
      return {
        ...state,
        topic: action.value,
      };
    case SET_EVENT_ID:
      return {
        ...state,
        eventId: action.eventId,
      };
    default: return state;
  }
};

export const sendTopic = (value) => ({
  type: SEND_TOPIC,
  value,
});
export const setEvent = (techsEvent) => ({
  type: SET_EVENT,
  techsEvent,
});
export const getEventTech = () => ({
  type: GET_EVENT,
});
export const getTechs = () => ({
  type: GET_MAIN_TECHS,
});
export const setTechs = (techs) => ({
  type: SET_TECHS,
  techs,
});
export const sendTechId = (techId, techName) => ({
  type: SEND_TECH_ID,
  techId,
  techName,
});
export const setRedirectOn = () => ({
  type: REDIRECTION_ON,
});
export const setRedirectOff = () => ({
  type: REDIRECTION_OFF,
});
export const setSubmit = () => ({
  type: SET_TOPIC,
});
export const setId = (eventId) => ({
  type: SET_EVENT_ID,
  eventId,
});
export default reducer;
