// --- initial state
const initialState = {
  inputEmail: '',
  inputPassword: '',
  inputConfirmPassword: '',
  isdisplaytechs: false,
  role: '',
  techsData: [],
  techs: [],
};

// --- action types
const HANDLE_INPUT_EMAIL = 'HANDLE_INPUT_EMAIL';
const HANDLE_INPUT_PASSWORD = 'HANDLE_INPUT_PASSWORD';
const HANDLE_CONFIRM_INPUT_PASSWORD = 'HANDLE_CONFIRM_INPUT_PASSWORD';
const HANDLE_DISPLAYTECHS = 'HANDLE_DISPLAYTECH';
const HANDLE_DISPLAYTECHS_FALSE = 'HANDLE_DISPLAYTECH_FALSE';
const HANDLE_ROLES = 'HANDLE_ROLES';
const HANDLE_CHECK = 'HANDLE_CHECK';
const CLEAR_CHECK = 'CLEAR_CHECK';
export const HANDLE_SIGNUP_SUBMIT = 'HANDLE_SUBMIT';
export const GET_TECHS = 'GET_TECHS';
const HANDLE_TECHS = 'HANDLE_TECHS';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_INPUT_EMAIL:
      return {
        ...state,
        inputEmail: action.inputValue,
      };
    case HANDLE_INPUT_PASSWORD:
      return {
        ...state,
        inputPassword: action.inputValue,
      };
    case HANDLE_CONFIRM_INPUT_PASSWORD:
      return {
        ...state,
        inputConfirmPassword: action.inputValue,
      };
    case HANDLE_ROLES:
      return {
        ...state,
        role: action.checkValue,
      };
    case HANDLE_TECHS:
      return {
        ...state,
        techsData: action.techsData,
      };
    case HANDLE_DISPLAYTECHS:
      return {
        ...state,
        isdisplaytechs: true,
      };
    case HANDLE_DISPLAYTECHS_FALSE:
      return {
        ...state,
        isdisplaytechs: false,
      };
    case HANDLE_CHECK:
      return {
        ...state,
        techs: [...state.techs, action.checkValue],
      };
    case CLEAR_CHECK:
      return {
        ...state,
        techs: [...state.techs.filter((tech) => (
          tech !== action.checkValue
        ))],
      };
    default: return state;
  }
};
export const handleEmailInput = (inputValue) => ({
  type: HANDLE_INPUT_EMAIL,
  inputValue,
});
export const handlePasswordInput = (inputValue) => ({
  type: HANDLE_INPUT_PASSWORD,
  inputValue,
});
export const handleConfirmPassword = (inputValue) => ({
  type: HANDLE_CONFIRM_INPUT_PASSWORD,
  inputValue,
});
export const handleSubmit = () => ({
  type: HANDLE_SIGNUP_SUBMIT,
});
export const handleDisplayTechs = () => ({
  type: HANDLE_DISPLAYTECHS,
});
export const handleDisplayTechsFalse = () => ({
  type: HANDLE_DISPLAYTECHS_FALSE,
});
export const handleRoles = (checkValue) => ({
  type: HANDLE_ROLES,
  checkValue,
});
export const handleCheck = (checkValue) => ({
  type: HANDLE_CHECK,
  checkValue,
});
export const clearCheck = (checkValue) => ({
  type: CLEAR_CHECK,
  checkValue,
});
export const getTechs = () => ({
  type: GET_TECHS,
});
export const handleTechs = (techsData) => ({
  type: HANDLE_TECHS,
  techsData,
});

export default reducer;
