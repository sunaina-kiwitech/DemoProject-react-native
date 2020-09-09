export const LOGIN = 'LOGIN';

export const Login = (userName) => {
    return {
        type: LOGIN,
        payload: { email: userName }
    }
}
