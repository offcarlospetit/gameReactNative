const defaultState = {
    words: [
        "jQuery",
        "Jake Weaary",
        "Vue.js",
        "Knockout"
    ]
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE':
            return state
        default:
            return state;
    }
};
