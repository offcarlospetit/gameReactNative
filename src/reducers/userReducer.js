const defaultState = {
    name: '',
    points: 0
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_SCORE':
            return {
                ...state,
                points: state.points + 1,
            }
        case 'CLEAR_SCORE':
            return {
                ...state,
                points: 0,
            }

        default:
            return state;
    }
};

