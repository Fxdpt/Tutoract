import { connect } from 'react-redux';
import SignInForm from 'src/components/Pages/SignInForm';
import { handleSigninEmailInput, handleSigninPasswordInput, handleSubmit } from '../../../store/reducer/signin';

const mapStateToProps = (state) => ({
  inputSigninEmail: state.signin.inputSigninEmail,
  inputSigninPassword: state.signin.inputSigninPassword,
});

const mapDispatchToProps = (dispatch) => ({
  changeSigninEmailInput: (value, name) => {
    dispatch(handleSigninEmailInput(value, name));
  },
  changeSigninPasswordInput: (value, name) => {
    dispatch(handleSigninPasswordInput(value, name));
  },
  sendSubmit: () => {
    dispatch(handleSubmit());
  },
});

const SignInFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInForm);

export default SignInFormContainer;
