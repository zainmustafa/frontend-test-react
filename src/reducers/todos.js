import forEach from "lodash/forEach";
import ActionType from "../actions/actionsTypes.js";

const initialState = {
    isLoading: false,
    nodeList : []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_TODO:
            return { ...state, isLoading: true };

        case ActionType.GET_TODO_SUCCESS:
            return {
                ...state,
                nodeList : action.payload,
                isLoading: false
            };

        case ActionType.GET_TODO_FAIL:
            return { ...state, isLoading: false };

        default:
            return state;
    }
};
