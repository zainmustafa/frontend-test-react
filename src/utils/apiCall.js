const API_URL = "https://backend.pi-top.com/todo-test/v1/todos";

function processRequest(request) {
    return request
        .then(res => res.json())
        .then(res => res)
        .catch(error => {
            throw error;
        });
}

export function get(id) {
    const API_REQ_URL = id ? `${API_URL}/${id}/` : API_URL;
    const request = fetch(API_REQ_URL, {
        method: "GET"
    });
    return processRequest(request);
}

export function post(obj) {
    const data = JSON.stringify(obj);
    const request = fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    });
    return processRequest(request);
}

export function put(obj, id) {
    const data = JSON.stringify(obj);
    const request = fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    });
    return processRequest(request);
}
