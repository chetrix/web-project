const initialState = {
    storeDetailData: null
};

export default function storeLocatorReducer(state=initialState, action) {
    switch(action.type) {
        case 'LOAD_STORE_LOCATOR_DATA':
            return {
                ...state,
                loading: true,
            }
        default:
            return state; 
    }
}