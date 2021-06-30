import { connect } from "react-redux";
import Profile from "./profile";
import { fetchProfile } from '../../actions/profile_actions';
import { openModal } from "../../actions/modal_actions";


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    profile: state.entities.profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: userId => dispatch(fetchProfile(userId)),
    openModal: modal => dispatch(openModal(modal))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
