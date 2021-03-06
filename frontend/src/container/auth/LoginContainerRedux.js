import React, { useEffect } from "react";
import Auth from "../../components/auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm } from "../../modules/auth";
import { withRouter } from "react-router-dom";

const LoginContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));
  const { username, password } = form;
  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  return (
    <Auth
      login
      username={username}
      password={password}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default withRouter(LoginContainer);
