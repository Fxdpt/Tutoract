// --- initial state

const initialState = {
  displayform: false,
  inputCity: '',
  inputNickname: '',
  picture: [],
  settingsOpen: false,
  mySettings: false,
  date: new Date(),
  changeDate: null,
  limit: null,
  tech_id: null,
  isDisplay: false,
  topic: '',
  eventId: null,
  loadDatas: false,
};

// --- action types
const MY_SETTINGS_TOGGLE = 'MY_SETTINGS_TOGGLE';
const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
const HANDLE_DISPLAY_FORM = 'HANDLE_DISPLAY_FORM';
const HANDLE_CITY_INPUT = 'HANDLE_CITY_INPUT';
const HANDLE_NICKNAME_INPUT = 'HANDLE_NICKNAME_INPUT';
const HANDLE_PICTURE = 'HANDLE_PICTURE';
const UNDISPLAY_FORM = 'UNDISPLAY_FORM';
const HANDLE_NEWDATE = 'HANDLE_NEWDATE';
const SET_CREATED_DATE = 'SET_CREATED_DATE';
const HANDLE_LIMIT_VALUE = 'HANDLE_LIMIT_VALUE';
const HANDLE_TECH_VALUE = 'HANDLE_TECH_VALUE';
const SET_FORM = 'SET_FORM';
const HANDLE_TOPIC = 'HANDLE_TOPIC';
const SET_ID = 'SET_ID';
const LOAD_DATAS = 'LOAD_DATAS';
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const SEND_CREATED_SUBMIT = 'SEND_CREATED_SUBMIT';
export const HANDLE_EVENT_SUBMIT = 'HANDLE_EVENT_SUBMIT';
export const HANDLE_PROFIL_SUBMIT = 'HANDLE_PROFIL_SUBMIT';


// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_DISPLAY_FORM:
      return {
        ...state,
        displayform: true,
      };
    case HANDLE_CITY_INPUT:
      return {
        ...state,
        inputCity: action.value,
      };
    case HANDLE_NICKNAME_INPUT:
      return {
        ...state,
        inputNickname: action.value,
      };
    case HANDLE_PICTURE:
      return {
        ...state,
        picture: action.picture,
      };
    case UNDISPLAY_FORM:
      return {
        ...state,
        displayform: false,
      };
    case TOGGLE_SETTINGS:
      return {
        ...state,
        settingsOpen: !state.settingsOpen,
      };
    case MY_SETTINGS_TOGGLE:
      return {
        ...state,
        mySettings: !state.mySettings,
      };
    case HANDLE_NEWDATE:
      return {
        ...state,
        date: action.newDate,
      };
    case SET_CREATED_DATE:
      return {
        ...state,
        changeDate: action.changeDate,
      };
    case HANDLE_LIMIT_VALUE:
      return {
        ...state,
        limit: action.value,
      };
    case HANDLE_TECH_VALUE:
      return {
        ...state,
        tech_id: action.value,
      };
    case SET_FORM:
      return {
        ...state,
        isDisplay: !state.isDisplay,
      };
    case HANDLE_TOPIC:
      return {
        ...state,
        topic: action.newTopic,
      };
    case SET_ID:
      return {
        ...state,
        eventId: action.eventId,
      };
    case LOAD_DATAS:
      return {
        ...state,
        loadDatas: !state.loadDatas,
      };
    default: return state;
  }
};

// --- action creators

export const handleDisplayForm = () => ({
  type: HANDLE_DISPLAY_FORM,
});
export const changeCityInput = (value) => ({
  type: HANDLE_CITY_INPUT,
  value,
});
export const changeNicknameInput = (value) => ({
  type: HANDLE_NICKNAME_INPUT,
  value,
});
export const changeImage = (picture) => ({
  type: HANDLE_PICTURE,
  picture,
});
export const unDisplayForm = () => ({
  type: UNDISPLAY_FORM,
});
export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});
export const toggleMySettings = () => ({
  type: MY_SETTINGS_TOGGLE,
});
export const handleSubmit = () => ({
  type: HANDLE_PROFIL_SUBMIT,
});
export const setDate = (newDate) => ({
  type: HANDLE_NEWDATE,
  newDate,
});
export const setCreatedDate = (changeDate) => ({
  type: SET_CREATED_DATE,
  changeDate,
});
export const handleEventSubmit = () => ({
  type: HANDLE_EVENT_SUBMIT,
});
export const setlimit = (value) => ({
  type: HANDLE_LIMIT_VALUE,
  value,
});
export const setTech = (value) => ({
  type: HANDLE_TECH_VALUE,
  value,
});
export const setForm = () => ({
  type: SET_FORM,
});
export const setTopic = (newTopic) => ({
  type: HANDLE_TOPIC,
  newTopic,
});
export const setId = (eventId) => ({
  type: SET_ID,
  eventId,
});
export const sendUpdatedSubmit = () => ({
  type: SEND_CREATED_SUBMIT,
});
export const loadDatas = () => ({
  type: LOAD_DATAS,
});
export const UploadImage = () => ({
  type: UPLOAD_IMAGE,
});

// --- export
export default reducer;