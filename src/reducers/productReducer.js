const initState = {
    homeData: {},
    isLoading: false,
    error: false
}

export default function productReducer(state = initState, action) {
    switch (action.type) {
        case 'product/GET_HOME_DATA':
            return {
                ...state,
                isLoading: true
            }
        case 'product/GET_HOME_DATA_SUCCESS':
            console.log("Test");
            return {
                ...state,
                homeData: action.payload,
                isLoading: false
            }
        case 'product/GET_HOME_DATA_FAIL':
            return {
                ...state,
                error: true,
                isLoading: false
            }
        default:
            return state
    }
};
