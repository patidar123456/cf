import { GET_USER_ERROR, GET_USER_LOADING, GET_USER_SUCCESS, MAKE_CONTACT_ERROR, MAKE_CONTACT_LOADING, MAKE_CONTACT_SUCCESS, UPDATE_PROFILE_ERROR, UPDATE_PROFILE_LOADING, UPDATE_PROFILE_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_REGISTER_ERROR, USER_REGISTER_LOADING, USER_REGISTER_SUCCESS } from "./actionTypes";

const initialState = {
    userLogin: {
        loading: false,
        data: null,
        error: null
    },
    userRegister: {
        loading: false,
        data: null,
        error: null
    },
    getUser: {
        loading: false,
        data: null,
        error: null
    },
    updateProfile: {
        loading: false,
        data: null,
        error: null
    },
    contact: {
        loading: false,
        data: null,
        error: null
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_LOADING:
            return { ...state, userLogin: { ...state.userLogin, loading: true, data: null, error: null } };
        case USER_LOGIN_SUCCESS:
            return { ...state, userLogin: { ...state.userLogin, loading: false, data: action.payload, error: null } };
        case USER_LOGIN_ERROR:
            return { ...state, userLogin: { ...state.userLogin, loading: false, data: null, error: action.payload } };

        case USER_REGISTER_LOADING:
            return { ...state, userRegister: { ...state.userRegister, loading: true, data: null, error: null } };
        case USER_REGISTER_SUCCESS:
            return { ...state, userRegister: { ...state.userRegister, loading: false, data: action.payload, error: null } };
        case USER_REGISTER_ERROR:
            return { ...state, userRegister: { ...state.userRegister, loading: false, data: null, error: action.payload } };

        case GET_USER_LOADING:
            return { ...state, getUser: { ...state.getUser, loading: true, data: null, error: null } };
        case GET_USER_SUCCESS:
            return { ...state, getUser: { ...state.getUser, loading: false, data: action.payload, error: null } };
        case GET_USER_ERROR:
            return { ...state, getUser: { ...state.getUser, loading: false, data: null, error: action.payload } };

        case UPDATE_PROFILE_LOADING:
            return { ...state, updateProfile: { ...state.updateProfile, loading: true, data: null, error: null } };
        case UPDATE_PROFILE_SUCCESS:
            return { ...state, updateProfile: { ...state.updateProfile, loading: false, data: action.payload, error: null } };
        case UPDATE_PROFILE_ERROR:
            return { ...state, updateProfile: { ...state.updateProfile, loading: false, data: null, error: action.payload } };

        case MAKE_CONTACT_LOADING:
            return { ...state, contact: { ...state.contact, loading: true, data: null, error: null } };
        case MAKE_CONTACT_SUCCESS:
            return { ...state, contact: { ...state.contact, loading: false, data: action.payload, error: null } };
        case MAKE_CONTACT_ERROR:
            return { ...state, contact: { ...state.contact, loading: false, data: null, error: action.payload } };

        default:
            return state;
    }
};

export default reducer;
