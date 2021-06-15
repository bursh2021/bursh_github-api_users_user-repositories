import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getUsers } from '../redux/actionApiGithub';

function Main() {

    const dispatch = useDispatch()
    const perPage=useSelector(state=>state.GithubApiUsers.perPage)

    
    useEffect(() => {
        dispatch(getUsers())  
}, [])

    return (
        <div>
          {perPage}
        </div>
    )
}

export default Main
