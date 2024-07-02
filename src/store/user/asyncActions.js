import { getUserError, getUserLoading, getUserSuccess, makeContactError, makeContactLoading, makeContactSuccess, updateUserProfileError, updateUserProfileLoading, updateUserProfileSuccess, userLoginError, userLoginLoading, userLoginSuccess, userRegisterError, userRegisterLoading, userRegisterSuccess } from './actions';
import api from '../api';
import { toast } from 'react-toastify';

const userLoginAction = (postData) => {
  return async (dispatch) => {
    try {
      // Start the loading state
      dispatch(userLoginLoading());

      // Perform the asynchronous operation (e.g., API call)
      const response = await api.post('user/login', postData, { includeAuthorization: false });
      const data = response.data;

      // Dispatch success action with the received data
      dispatch(userLoginSuccess(data));
      if (data?.status) {
        toast.success(data?.message);
        // localStorage.setItem('id', data?.success?._id)
        // localStorage.setItem('AccessToken', data?.success?.token)
      }
    } catch (error) {
      // Dispatch error action if an error occurs
      dispatch(userLoginError(error.message));
      toast.error(error?.response?.data?.message);
    }
  };
};

const userRegisterAction = (postData) => {
  return async (dispatch) => {
    try {
      // Start the loading state
      dispatch(userRegisterLoading());

      // Perform the asynchronous operation (e.g., API call)
      const response = await api.post('user/register', postData, { includeAuthorization: false });
      const data = response.data;

      // Dispatch success action with the received data
      dispatch(userRegisterSuccess(data));
      if (data?.status) {
        toast.success(data?.message);
      }
    } catch (error) {
      // Dispatch error action if an error occurs
      dispatch(userRegisterError(error.message));
      toast.error(error?.response?.data?.message);
    }
  };
};

const getUserAction = () => {
  return async (dispatch) => {
    try {
      // Start the loading state
      dispatch(getUserLoading());

      // Perform the asynchronous operation (e.g., API call)
      const response = await api.get('user/get');
      const data = response.data;

      // Dispatch success action with the received data
      dispatch(getUserSuccess(data));
      if (data?.status) {
        // toast.success(data?.message);
      }
    } catch (error) {
      // Dispatch error action if an error occurs
      dispatch(getUserError(error.message));
      toast.error(error?.response?.data?.message);
    }
  };
};

const updateUserProfileAction = (postData) => {
  return async (dispatch) => {
    try {
      // Start the loading state
      dispatch(updateUserProfileLoading());

      // Perform the asynchronous operation (e.g., API call)
      const response = await api.post('user/profile/update', postData);
      const data = response.data;

      // Dispatch success action with the received data
      dispatch(updateUserProfileSuccess(data));
      if (data?.status) {
        toast.success(data?.message);
      }
    } catch (error) {
      // Dispatch error action if an error occurs
      dispatch(updateUserProfileError(error.message));
      toast.error(error?.response?.data?.message);
    }
  };
};

const makeContactAction = (postData) => {
  return async (dispatch) => {
    try {
      // Start the loading state
      dispatch(makeContactLoading());

      // Perform the asynchronous operation (e.g., API call)
      const response = await api.post('email/send-contact-email', postData);
      const data = response.data;

      // Dispatch success action with the received data
      dispatch(makeContactSuccess(data));
      if (data?.status) {
        toast.success(data?.message);
      }
    } catch (error) {
      // Dispatch error action if an error occurs
      dispatch(makeContactError(error.message));
      toast.error(error?.response?.data?.message);
    }
  };
};

export {
  userLoginAction,
  userRegisterAction,
  getUserAction,
  updateUserProfileAction,
  makeContactAction
};
