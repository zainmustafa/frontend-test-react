import forEach from "lodash/forEach";
import ActionType from "../actions/actionsTypes.js";

const initialState = {
    isLoading: false,
    detailLoading: false,
    nodeList: [],
    nodeDetail: {
        id: "",
        title: "",
        description: "",
        priority: 1,
        tag: [],
        createdAt: "",
        isDone: false
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        // Get Notes
        case ActionType.GET_TODO:
            return { ...state, isLoading: true };

        case ActionType.GET_TODO_SUCCESS:
            return {
                ...state,
                nodeList: action.payload,
                isLoading: false
            };

        case ActionType.GET_TODO_FAIL:
            return { ...state, isLoading: false };

        // Get Note Details
        case ActionType.GET_TODO_DETAIL:
            const tempNodeDetail = {
                id: "",
                title: "",
                description: "",
                priority: 1,
                tag: [],
                createdAt: "",
                isDone: false
            };
            return {
                ...state,
                nodeDetail: tempNodeDetail,
                detailLoading: true
            };

        case ActionType.GET_TODO_DETAIL_SUCCESS:
            return {
                ...state,
                nodeDetail: action.payload,
                detailLoading: false
            };

        case ActionType.GET_TODO_DETAIL_FAIL:
            return { ...state, detailLoading: false };

        // Post Notes
        case ActionType.POST_TODO:
            return { ...state, isLoading: true };

        case ActionType.POST_TODO_SUCCESS:
            return {
                ...state,
                nodeList: [...state.nodeList, action.payload],
                isLoading: false
            };

        case ActionType.POST_TODO_FAIL:
            return { ...state, isLoading: false };

        // Update Notes
        case ActionType.UPDATE_TODO:
            return { ...state, detailLoading: true };

        case ActionType.UPDATE_TODO_SUCCESS: {
            return {
                ...state,
                detailLoading: false
            };
        }

        case ActionType.UPDATE_TODO_FAIL:
            return { ...state, detailLoading: false };

        default:
            return state;
    }
};
