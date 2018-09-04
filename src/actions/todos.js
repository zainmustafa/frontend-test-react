
import { ActionType } from "../actions/actionsTypes";
import { post, get } from "../utils/apiCall";
import { actionDispatch } from "../utils/returnObj";

export default class ActionType {
    /**
    |--------------------------------------------------
    | Get TODO List
    |--------------------------------------------------
    */

    static getAllNotes() {
        return dispatch => {
            dispatch(actionDispatch(ActionType.GET_TODO));
            get("/GetClasses")
                .then(response => {
                    if (response.error) {
                        throw response.error;
                    }
                    dispatch(
                        actionDispatch(
                            ActionType.GET_TODO_SUCCESS,
                            response.classes
                        )
                    );
                })
                .catch(error => {
                    dispatch(
                        actionDispatch(
                            ActionType.GET_TODO_FAIL,
                            error
                        )
                    );
                });
        };
    }
    
    /**
    |--------------------------------------------------
    | TODO Actions
    |--------------------------------------------------
    */

    static getAllNotes() {
        return dispatch => {
            dispatch(actionDispatch(ActionType.GET_));
            let form = new FormData();
            form.append("username", username);
            post("/customer", form)
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
