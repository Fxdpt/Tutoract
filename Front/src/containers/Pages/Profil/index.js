import { connect } from 'react-redux';
import Profil from 'src/components/Pages/Profil';
import { getUserInfos } from 'src/store/reducer/user';
import { handleDisplayForm, unDisplayForm, setDate, handleEventSubmit, setlimit, setTech } from 'src/store/reducer/profil';

const mapStateToProps = (state) => ({
  avatar: state.user.avatar,
  city: state.user.city,
  promo: state.user.promo,
  events: state.user.events,
  eventsOwned: state.user.eventsOwned,
  firstname: state.user.firstname,
  githubAccount: state.user.github_account,
  lastname: state.user.lastname,
  linkedinAccount: state.user.linkedin_account,
  nickname: state.user.nickname,
  roles: state.user.roles,
  techs: state.user.techs,
  twitterAccount: state.user.twitter_account,
  displayform: state.profil.displayform,
  date: state.profil.date,
  getDatas: state.profil.loadDatas,
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfos: () => {
    dispatch(getUserInfos());
  },
  handleDisplay: () => {
    dispatch(handleDisplayForm());
  },
  unDisplayForm: () => {
    dispatch(unDisplayForm());
  },
  setDate: (newDate) => {
    dispatch(setDate(newDate));
  },
  handleEventSubmit: () => {
    dispatch(handleEventSubmit());
  },
  setlimit: (value) => {
    dispatch(setlimit(value));
  },
  setTech: (value) => {
    dispatch(setTech(value));
  },
});

const ProfilContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profil);

export default ProfilContainer;
