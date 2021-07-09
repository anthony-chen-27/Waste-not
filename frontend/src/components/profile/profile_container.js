import { connect } from "react-redux";
import Profile from "./profile";
import { fetchProfile } from '../../actions/profile_actions';
import { openModal } from "../../actions/modal_actions";


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    restaurants: Object.values(state.entities.profile).filter(restaurant => restaurant.owner === state.session.user.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: userId => dispatch(fetchProfile(userId)),
    openModal: modal => dispatch(openModal(modal))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
