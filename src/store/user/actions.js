import { GET_USER_ERROR, GET_USER_LOADING, GET_USER_SUCCESS, MAKE_CONTACT_ERROR, MAKE_CONTACT_LOADING, MAKE_CONTACT_SUCCESS, UPDATE_PROFILE_ERROR, UPDATE_PROFILE_LOADING, UPDATE_PROFILE_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_REGISTER_ERROR, USER_REGISTER_LOADING, USER_REGISTER_SUCCESS } from './actionTypes';

// user login
const userLoginLoading = () => {
  return {
    type: USER_LOGIN_LOADING,
  };
};

const userLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};

const userLoginError = (error) => {
  return {
    type: USER_LOGIN_ERROR,
    payload: error,
  };
};

// user register
const userRegisterLoading = () => {
  return {
    type: USER_REGISTER_LOADING,
  };
};

const userRegisterSuccess = (data) => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: data,
  };
};

const userRegisterError = (error) => {
  return {
    type: USER_REGISTER_ERROR,
    payload: error,
  };
};

// get user
const getUserLoading = () => {
  return {
    type: GET_USER_LOADING,
  };
};

const getUserSuccess = (data) => {
  return {
    type: GET_USER_SUCCESS,
    payload: data,
  };
};

const getUserError = (error) => {
  return {
    type: GET_USER_ERROR,
    payload: error,
  };
};

// update user profile
const updateUserProfileLoading = () => {
  return {
    type: UPDATE_PROFILE_LOADING,
  };
};

const updateUserProfileSuccess = (data) => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: data,
  };
};

const updateUserProfileError = (error) => {
  return {
    type: UPDATE_PROFILE_ERROR,
    payload: error,
  };
};

// make contact
const makeContactLoading = () => {
  return {
    type: MAKE_CONTACT_LOADING,
  };
};

const makeContactSuccess = (data) => {
  return {
    type: MAKE_CONTACT_SUCCESS,
    payload: data,
  };
};

const makeContactError = (error) => {
  return {
    type: MAKE_CONTACT_ERROR,
    payload: error,
  };
};

export {
  userLoginLoading,
  userLoginSuccess,
  userLoginError,

  userRegisterLoading,
  userRegisterSuccess,
  userRegisterError,

  getUserLoading,
  getUserSuccess,
  getUserError,

 updateUserProfileLoading,
 updateUserProfileSuccess,
 updateUserProfileError,

 makeContactLoading,
 makeContactSuccess,
 makeContactError,

};