import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS});
            const response = await axios.get('https://reqres.in/api/users?page=1')

            // с нагрузкой
            setTimeout(()=>{
                dispatch({
                    type: UserActionTypes.FETCH_USERS_SUCCESS,
                    payload: response.data.data
                });
            }, 500);

            // dispatch({
            //     type: UserActionTypes.FETCH_USERS_SUCCESS,
            //     payload: response.data.data
            // });


        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: `Ошибка при загрузке пользователей: ${e}`
            });
        }
    }
}
