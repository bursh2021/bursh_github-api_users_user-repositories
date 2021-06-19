import axios from "axios"
import {
	setRepos,
	setUsers,
	isErrorAPI,
	setTotalCount,
	isFeatch,
} from "./reducer"

export const getUsers = (username, perPage, currentPage) => {
	return async dispatch => {
		try {
			const response = await axios.get(
				`https://api.github.com/users/${username}`
			)
			const repos_urll = await axios.get(
				`${response.data.repos_url}?&per_page=${perPage}&page=${currentPage}`
			)
			await dispatch(setUsers(response.data)) //user data
			await dispatch(setTotalCount(response.data.public_repos)) //quantity repos
			await dispatch(setRepos(repos_urll.data)) //repos user
			await dispatch(isFeatch(true))
			dispatch(isErrorAPI(null))
		} catch {
			setTimeout(() => dispatch(isErrorAPI(false)), 2600)
			dispatch(isErrorAPI(true))
		}
	}
}
