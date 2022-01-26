import {GET_ALL_USERS} from '../../store/actions/ActionType';
import { getAllUsers } from '../../Servicers/UserService';

export const retriveAllUsers = (UserList) =>{
    return {
        type:GET_ALL_USERS,
        UserList,
    };
};

export const  retriveAllUsersInfo =(dispatch) =>{
     const result =  getAllUsers();
    result.then((response)=>{
    dispatch(retriveAllUsers(response))
    })
}
