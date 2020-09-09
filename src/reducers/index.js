import { LOGIN } from "../actions";

let intialState = {
    userInfo: {
        email: ''
    }
}
const LoginReducer = (state = intialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, userInfo: action.payload }
        default:
            return state;
    }
}

export default LoginReducer
