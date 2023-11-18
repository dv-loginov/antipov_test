const baseUrl = 'https://reqres.in'


export function getUsers(page: number = 1) {
    return request(`api/users?page=${page}`);
}

function request(endpoint:string) {
    return fetch(`${baseUrl}/${endpoint}`).then(getResponseData)
}

function getResponseData(res:any)
{
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
}
