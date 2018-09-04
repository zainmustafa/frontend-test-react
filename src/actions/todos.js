import ActionType from "../actions/actionsTypes.js";
import { post, get, put } from "../utils/apiCall.js";
import { actionDispatch } from "../utils/returnObj.js";

export default class TodoAction {
    /**
    |--------------------------------------------------
    | Get TODO List
    |--------------------------------------------------
    */

    static getAllNotes() {
        return dispatch => {
            dispatch(actionDispatch(ActionType.GET_TODO));
            get()
                .then(response => {
                    dispatch(
                        actionDispatch(ActionType.GET_TODO_SUCCESS, response)
                    );
                })
                .catch(error => {
                    dispatch(actionDispatch(ActionType.GET_TODO_FAIL, error));
                });
        };
    }

    /**
    |--------------------------------------------------
    | Get Todo Details
    |--------------------------------------------------
    */

    static getTodoDetails(id) {
        return dispatch => {
            dispatch(actionDispatch(ActionType.GET_TODO_DETAIL));
            get(id)
                .then(response => {
                    dispatch(
                        actionDispatch(
                            ActionType.GET_TODO_DETAIL_SUCCESS,
                            response
                        )
                    );
                })
                .catch(error => {
                    dispatch(
                        actionDispatch(ActionType.GET_TODO_DETAIL_FAIL, error)
                    );
                });
        };
    }

    /**
    |--------------------------------------------------
    | Post Todo
    |--------------------------------------------------
    */
    static postTodo(note) {
        return dispatch => {
            dispatch(actionDispatch(ActionType.POST_TODO));
            post(note)
                .then(response => {
                    if (response.error) {
                        throw response.error;
                    }
                    dispatch(
                        actionDispatch(ActionType.POST_TODO_SUCCESS, response)
                    );
                })
                .catch(error => {
                    dispatch(actionDispatch(ActionType.POST_TODO_FAIL, error));
                });
        };
    }

    static updateTodo(node) {
        let obj = {
            isDone: !node.isDone
        };
        node.isDone = !node.isDone;
        return dispatch => {
            dispatch(actionDispatch(ActionType.UPDATE_TODO));
            put(obj, node.id)
                .then(response => {
                    if (response.error) {
                        throw response.error;
                    }
                    dispatch(
                        actionDispatch(ActionType.UPDATE_TODO_SUCCESS, response)
                    );
                })
                .catch(error => {
                    dispatch(
                        actionDispatch(ActionType.UPDATE_TODO_FAIL, error)
                    );
                });
        };
    }
}
