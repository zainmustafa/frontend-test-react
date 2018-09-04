import forEach from "lodash/forEach";
import ActionType from "../actions/actionsTypes.js";

const initialState = {
    isLoading: false,
    nodeList: [],
    nodeDetail: {
        id : "",
        title : "",
        description :"",
        priority : 1,
        tag : [],
        createdAt : "",
        isDone : false
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
                id : "",
                title : "",
                description :"",
                priority : 1,
                tag : [],
                createdAt : "",
                isDone : false
            }
            return { ...state, nodeDetail : tempNodeDetail, isLoading: true };

        case ActionType.GET_TODO_DETAIL_SUCCESS:
            return {
                ...state,
                nodeDetail: action.payload,
                isLoading: false
            };

        case ActionType.GET_TODO_DETAIL_FAIL:
            return { ...state, isLoading: false };

        default:
            return state;
    }
};
