import axios from 'axios'
import {setRepos,setUsers,isErrorAPI, setTotalCount,} 
from './reducer'

export const getUsers= (username='gaearon', perPage=4, currentPage=1 )=>{
    return async (dispatch)=> {
        try {
            const response = await  axios.get(`https://api.github.com/users/${username}`);
            const repos_urll= await axios.get(`${response.data.repos_url}?&per_page=${perPage}&page=${currentPage}`)    
           await dispatch(setUsers(response.data))//user data
           await dispatch(setTotalCount(response.data.public_repos))//quantity repos
           await dispatch(setRepos(repos_urll.data))//repos user
            console.log('username',username);
        }
           catch {
            dispatch(isErrorAPI(true))
           }
        }  
   
    }