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
        console.log('here');
        return dispatch => {
            console.log({ActionType});
            debugger;
            dispatch(actionDispatch(ActionType.GET_TODO));
            get()
                .then(response => {
                    console.log(response);

                    dispatch(
                        actionDispatch(
                            ActionType.GET_TODO_SUCCESS,
                            response.classes
                        )
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

    static getAllNotes(note) {
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
                    console.log("error", error);
                    dispatch(
                        actionDispatch(ActionType.GET_CUSTOMERS_FAIL, error)
                    );
                });
        };
    }
}
