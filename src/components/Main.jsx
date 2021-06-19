import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../redux/actionApiGithub"
import { createPages } from "./paginationFunction"
import { setCurrentPage } from "../redux/reducer"
import Search from "./Search"
import Repositories from "./Repositories"
import StartSearch from "./StartSearch"
import NotFound from "./NotFound"

function Main() {
	const dispatch = useDispatch()

	//загрузка данных с гит
	const isFeatch = useSelector(state => state.GithubApiUsers.isFeatch)
	const isErrorAPI = useSelector(state => state.GithubApiUsers.isErrorAPI)
	//pagination
	const currentPage = useSelector(state => state.GithubApiUsers.currentPage)
	const perPage = useSelector(state => state.GithubApiUsers.perPage)
	const totalCount = useSelector(state => state.GithubApiUsers.totalCount)
	const pageCount = Math.ceil(totalCount / perPage)
	const pages = []
	createPages(pages, pageCount, currentPage)
	//search
	const [inputText, setInputText] = useState("")
	//FIXME:
	function searchHandler(e) {
		if (e.charCode == 13) {
			dispatch(setCurrentPage(1))
			dispatch(getUsers(inputText, perPage, currentPage))
		}
	}
	//данные юзера и его репов
	const users = useSelector(state => state.GithubApiUsers.users)
	//render
	useEffect(() => {
		if (inputText != "") {
			dispatch(getUsers(inputText, perPage, currentPage))
		}
	}, [currentPage])

	return (
		<div>
			<Search
				searchHandler={searchHandler}
				setInputText={e => setInputText(e)}
			/>
			{isErrorAPI !== null ? (
				<div>
					<NotFound />
				</div>
			) : (
				<div>
					{isFeatch ? (
						<div>
							{users.map(repo => (
								<Repositories
									pages={pages}
									pageCount={pageCount}
									repo={repo}
									key={repo.name}
								>
									{repo.login}
									<img src={repo.avatar_url} alt='' />
								</Repositories>
							))}
						</div>
					) : (
						<StartSearch />
					)}
				</div>
			)}
		</div>
	)
}

export default Main
