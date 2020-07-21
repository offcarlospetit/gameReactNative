import { Dispatch, Action } from "redux";

export const UpdateScoreAction = () => ({
    type: 'UPDATE_SCORE',
});

export const RestartScoreAction = () => ({
    type: 'CLEAR_SCORE',
});