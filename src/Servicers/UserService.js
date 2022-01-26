import axios from 'axios';


export async function getAllUsers(){
    return await axios.get("https://reqres.in/api/users?page=1")
    .then((response)=>{console.log(response)
        return response.data;
    }).catch((error)=>{
        console.log("Error",error.toJSON());
        return error.toJSON();
    });
}