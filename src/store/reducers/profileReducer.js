const initialState = {
    profileData: null
};

export default function storeLocatorReducer(state=initialState, action) {
    switch(action.type) {
        case 'LOAD_PROFILE_DATA':
            return {
                ...state,
                loading: true,
            }
        default:
            return state; 
    }
}