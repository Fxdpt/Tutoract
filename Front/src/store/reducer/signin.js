// --- initial state
const initialState = {
  inputSigninEmail: '',
  inputSigninPassword: '',
  nameSigninEmail: '',
  nameSigninPassword: '',
};

// --- action types
const HANDLE_SIGNIN_INPUT_EMAIL = 'HANDLE_SIGNIN_INPUT_EMAIL';
const HANDLE_SIGNIN_INPUT_PASSWORD = 'HANDLE_SIGNIN_INPUT_PASSWORD';
export const HANDLE_SIGNIN_SUBMIT = 'HANDLE_SIGNIN_SUBMIT';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_SIGNIN_INPUT_EMAIL:
      return {
        ...state,
        inputSigninEmail: action.inputValue,
        nameSigninEmail: action.nameValue,
      };
    case HANDLE_SIGNIN_INPUT_PASSWORD:
      return {
        ...state,
        inputSigninPassword: action.inputValue,
        nameSigninPassword: action.nameValue,
      };

    default: return state;
  }
};

export const handleSigninEmailInput = (inputValue, nameValue) => ({
  type: HANDLE_SIGNIN_INPUT_EMAIL,
  inputValue,
  nameValue,
});
export const handleSigninPasswordInput = (inputValue, nameValue) => ({
  type: HANDLE_SIGNIN_INPUT_PASSWORD,
  inputValue,
  nameValue,
});
export const handleSubmit = () => ({
  type: HANDLE_SIGNIN_SUBMIT,
});

export default reducer;
