const defaultState = {
    points: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_GLOBAL_SCORE':
            return {
                ...state,
                points: action.state,
            }
        default:
            return state;
    }
};

