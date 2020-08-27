export const initialState = {
    signup: [
        {
            name: '',
            username: '',
            password: '',
            confirm_password: ''
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SIGNUP':
            return {
                ...state,
                signup: action.payload
            }
        default:
            return state;
    }
}