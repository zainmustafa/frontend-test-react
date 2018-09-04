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

export function post(body) {
    const request = fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    return processRequest(request);
}
