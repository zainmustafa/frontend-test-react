import ActionType from "../actions/actionsTypes.js";
import { post, get } from "../utils/apiCall.js";
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
                    actionDispatch(ActionType.GET_TODO_DETAIL_SUCCESS, response)
                );
            })
            .catch(error => {
                dispatch(actionDispatch(ActionType.GET_TODO_DETAIL_FAIL, error));
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
            dispatch(actionDispatch(ActionType.GET_));
            post(note)
                .then(response => {
                    if (response.error) {
                        throw response.error;
                    }
                    dispatch(
                        actionDispatch(
                            ActionType.GET_CUSTOMERS_SUCCESS,
                            response
                        )
                    );
                })
                .catch(error => {
                    dispatch(
                        actionDispatch(ActionType.GET_CUSTOMERS_FAIL, error)
                    );
                });
        };
    }
}
