import { createSlice } from "@reduxjs/toolkit"

const GithubApiUsers = createSlice({
	name: "reposAPIdate",
	initialState: {
		reposUsers: [],
		users: [],
		perPage: 5,
		currentPage: 1,
		totalCount: 1,
		isFeatch: false,
		isErrorAPI: null,
	},
	reducers: {
		setRepos: (state, action) => {
			state.reposUsers = action.payload
		},
		setTotalCount: (state, action) => {
			state.totalCount = action.payload
		},
		setUsers: (state, action) => {
			state.users = [action.payload]
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload
		},

		isFeatch: (state, action) => {
			state.isFeatch = action.payload
		},
		isErrorAPI: (state, action) => {
			state.isErrorAPI = action.payload
		},
	},
})
export default GithubApiUsers.reducer
export const {
	setRepos,
	setUsers,
	setCurrentPage,
	setTotalCount,
	isErrorAPI,
	isFeatch,
} = GithubApiUsers.actions
