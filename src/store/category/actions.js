import { ADD_CATEGORY_ERROR, ADD_CATEGORY_LOADING, ADD_CATEGORY_SUCCESS, GET_ALL_CATEGORY_ERROR, GET_ALL_CATEGORY_LOADING, GET_ALL_CATEGORY_SUCCESS, GET_CATEGORY_ERROR, GET_CATEGORY_LOADING, GET_CATEGORY_SUCCESS, GET_SLIDER_ERROR, GET_SLIDER_LOADING, GET_SLIDER_SUCCESS, ADD_SLIDER_ERROR, ADD_SLIDER_LOADING, ADD_SLIDER_SUCCESS  } from './actionTypes';

// add category
const addCategoryLoading = () => {
  return {
    type: ADD_CATEGORY_LOADING,
  };
};

const addCategorySuccess = (data) => {
  return {
    type: ADD_CATEGORY_SUCCESS,
    payload: data,
  };
};

const addCategoryError = (error) => {
  return {
    type: ADD_CATEGORY_ERROR,
    payload: error,
  };
};

// get all category
const getAllCategoryLoading = () => {
  return {
    type: GET_ALL_CATEGORY_LOADING,
  };
};

const getAllCategorySuccess = (data) => {
  return {
    type: GET_ALL_CATEGORY_SUCCESS,
    payload: data,
  };
};

const getAllCategoryError = (error) => {
  return {
    type: GET_ALL_CATEGORY_ERROR,
    payload: error,
  };
};

// get category
const getCategoryLoading = () => {
  return {
    type: GET_CATEGORY_LOADING,
  };
};

const getCategorySuccess = (data) => {
  return {
    type: GET_CATEGORY_SUCCESS,
    payload: data,
  };
};

const getCategoryError = (error) => {
  return {
    type: GET_CATEGORY_ERROR,
    payload: error,
  };
};

export {
  addCategoryLoading,
  addCategorySuccess,
  addCategoryError,

  getAllCategoryLoading,
  getAllCategorySuccess,
  getAllCategoryError,

  getCategoryLoading,
  getCategorySuccess,
  getCategoryError,
}