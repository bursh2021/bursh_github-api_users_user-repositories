import {createSlice} from '@reduxjs/toolkit'

const GithubApiUsers=createSlice(
    {
        name:'reposAPIdate',
        initialState:{
            reposUsers:[],
            users:[],
            perPage:5,
            currentPage:1,
            totalCount:1,
            isErrorAPI:false,
        },
        reducers:{
            setRepos:(state,action)=> {
                state.reposUsers =action.payload
            },
            setTotalCount:(state,action)=>{
                state.totalCount=action.payload
            },
            setUsers:(state,action)=> {
                state.users =[action.payload]
            },
            setCurrentPage:(state,action)=>{
                state.currentPage=action.payload
            },
            isErrorAPI:(state,action)=>{
                state.isErrorAPI=action.payload
            }
        }
    }
)
export default GithubApiUsers.reducer
export const 
{setRepos,setUsers,setCurrentPage,
    setTotalCount,isErrorAPI}=GithubApiUsers.actions
