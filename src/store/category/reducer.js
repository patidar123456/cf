import { ADD_CATEGORY_ERROR, ADD_CATEGORY_LOADING, ADD_CATEGORY_SUCCESS, GET_ALL_CATEGORY_ERROR, GET_ALL_CATEGORY_LOADING, GET_ALL_CATEGORY_SUCCESS, GET_CATEGORY_ERROR, GET_CATEGORY_LOADING, GET_CATEGORY_SUCCESS, GET_SLIDER_ERROR, GET_SLIDER_LOADING, GET_SLIDER_SUCCESS, ADD_SLIDER_ERROR, ADD_SLIDER_LOADING, ADD_SLIDER_SUCCESS } from "./actionTypes";

const initialState = {
    addCategory: {
        loading: false,
        data: null,
        error: null
    },
    allCategory: {
        loading: false,
        data: null,
        error: null
    },
    getCategory: {
        loading: false,
        data: null,
        error: null
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY_LOADING:
            return { ...state, addCategory: { ...state.addCategory, loading: true, data: null, error: null } };
        case ADD_CATEGORY_SUCCESS:
            return { ...state, addCategory: { ...state.addCategory, loading: false, data: action.payload, error: null } };
        case ADD_CATEGORY_ERROR:
            return { ...state, addCategory: { ...state.addCategory, loading: false, data: null, error: action.payload } };

        case GET_ALL_CATEGORY_LOADING:
            return { ...state, allCategory: { ...state.allCategory, loading: true, data: null, error: null } };
        case GET_ALL_CATEGORY_SUCCESS:
            return { ...state, allCategory: { ...state.allCategory, loading: false, data: action.payload, error: null } };
        case GET_ALL_CATEGORY_ERROR:
            return { ...state, allCategory: { ...state.allCategory, loading: false, data: null, error: action.payload } };

        case GET_CATEGORY_LOADING:
            return { ...state, getCategory: { ...state.getCategory, loading: true, data: null, error: null } };
        case GET_CATEGORY_SUCCESS:
            return { ...state, getCategory: { ...state.getCategory, loading: false, data: action.payload, error: null } };
        case GET_CATEGORY_ERROR:
            return { ...state, getCategory: { ...state.getCategory, loading: false, data: null, error: action.payload } };
        default:
            return state;
    }
};

export default reducer;
