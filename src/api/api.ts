const baseUrl = 'https://reqres.in'

export function getUsers(page: number = 1) {
    return request(`api/users?page=${page}`, {});
}

export function getToken() {
    return request(`api/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        })
    });
}

function request(endpoint: string, options: any) {
    return fetch(`${baseUrl}/${endpoint}`, options).then(getResponseData)
}

function getResponseData(res: any) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
}
