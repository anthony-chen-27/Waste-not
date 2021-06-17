import React from "react";
import { useDispatch } from "react-redux";

import { openModal } from "../../actions/modal_actions";
import LoginForm from "./login_form_container";

export default ({ children, className }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(openModal(() => <LoginForm />));
  };
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};
