import { Dispatch, Action } from "redux";

export const UpdateGlobalScore = (points) => ({
    type: 'UPDATE_GLOBAL_SCORE',
    state: points
});
