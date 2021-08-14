const initialState = {
    headerData: null,
    isFetching: false,
    errorMessage: undefined,
    homePage: false,
};

export default function headerReducer(state=initialState, action) {
    switch(action.type) {
        case 'LOAD_HEADER_DATA':
            return {
                ...state,
                isFetching: true,
            }
        default:
            return state; 
    }
}