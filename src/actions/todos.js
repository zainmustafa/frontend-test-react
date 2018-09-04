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
    | TODO Actions
    |--------------------------------------------------
    */

    static getAllNotes1(note) {
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
