import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../store/actions/index';
import CustomizedTables from './CustomizedTables';

const Users = () => {

    const dispatch=useDispatch();
    const UserList = useSelector((state)=>state.UserReducer.UserList)
    console.log("from redux",UserList)
    useEffect(()=>{
        action.retriveAllUsersInfo(dispatch);
    },[dispatch])

  return Object.keys(UserList).length !==0 ?
  (

  <React.Fragment>
  <h3 style={{ paddingTop:"2em",display:'flex',justifyContent:"center"}}>UserList</h3>
  <CustomizedTables tableData={UserList} />
  </React.Fragment>
    ):<div/>
};

export default Users;