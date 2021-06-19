import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { setCurrentPage } from "../redux/reducer"
import { faUsers, faUser } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
const A = styled.a`
	color: blue;
	font-size: 15px;
`
const WrapperGrid = styled(motion.div)`
	display: grid;
	min-height: 90vh;
	grid-template-columns: 1fr 4fr;
	background: #dfdede;
	padding: 30px;
	@media (max-width: 665px) {
		display: flex;
		flex-direction: column;
	}
`
const Block1 = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 30px;
	font-weight: 600;
	width: 250px;
	@media (max-width: 665px) {
		margin: 0 auto;
	}
`
const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 20px;
	font-weight: 500;
	color: #494949;
	span {
		margin-right: 10px;
	}
	@media (max-width: 800px) {
		font-size: 16px;
		flex-direction: column;
	}
`
const Block2 = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 30px;
	h1 {
		font-size: 20px;
		margin: 0 auto;
		padding: 20px 0px;
	}
`

const Ava = styled.img`
	border-radius: 50%;
	object-fit: cover;
`
const D = styled.div`
	font-size: 15px;
	color: black;
	padding: 0px 10px;
`
const Dr = styled.div`
	display: flex;
	justify-content: start;
	padding: 10px 15px;
	border-radius: 10px;
	background: white;
	color: blue;
	margin-bottom: 15px;
`
const H5 = styled.h5`
	color: black;
	font-size: 12px;
`
const Pages = styled.div`
	display: flex;
	text-align: center;

	padding-bottom: 20px;
	@media (max-width: 850px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	}
	.current_page_last2 {
		padding: 5px;
		margin: 0 10px;
		border-radius: 10%;
		cursor: pointer;
		:hover {
			color: white;
			background-color: #4109db;
		}
	}
	.current_page_last {
		cursor: pointer;
		border-radius: 10%;
		padding: 5px;
		margin: 0 10px;
		color: black;
		:hover {
			background-color: #4109db;
			color: white;
		}
		@media (max-width: 850px) {
			padding: 1px;
			margin: 1px;
		}
	}
	.page {
		cursor: pointer;
		border: 1px solid black;
		border-radius: 10%;
		padding: 5px 10px;
		margin: 0 5px;
		border: none;
		color: black;
		:hover {
			background-color: #4109db;
			color: white;
		}
	}
	.current_page {
		border: none;
		cursor: pointer;
		border-radius: 10%;
		padding: 5px 10px;
		margin: 0 10px;
		color: white;
		background-color: #010385;
	}
`
const Img = styled.img`
	height: 5vh;
	margin-right: 20px;
`

function Repositories(props) {
	const dispatch = useDispatch()
	const repo = props.repo
	const pages = props.pages
	const repUser = useSelector(state => state.GithubApiUsers.reposUsers)
	const currentPage = useSelector(state => state.GithubApiUsers.currentPage)
	const totalCount = useSelector(state => state.GithubApiUsers.totalCount)
	const lastPage = Math.ceil(totalCount / 5)

	return (
		<WrapperGrid
			initial={{ y: -120 }}
			animate={{
				y: 0,
			}}
		>
			<Block1>
				<Ava src={repo.avatar_url} alt='Logo' />
				<D>
					<A target='_blank' href={repo.html_url}>
						{repo.name}
					</A>{" "}
				</D>
				<D>{repo.login}</D>
				<Flex>
					<span>
						<FontAwesomeIcon className='faSearch' icon={faUsers} />
						<span>followers_{repo.followers} </span>
					</span>
					<span>
						<FontAwesomeIcon className='faSearch' icon={faUser} />
						<span> following_{repo.following} </span>
					</span>
				</Flex>
			</Block1>

			{totalCount ? (
				<div>
					<Block2>
						<h1>Repositories ({totalCount})</h1>

						<Pages>
							<span
								className={currentPage <= 5 ? null : "current_page_last"}
								onClick={() => dispatch(setCurrentPage(1))}
							>
								{currentPage <= 5 ? null : <div>{1}</div>}
							</span>
							{pages.map((p, id) => (
								<span
									key={id}
									onClick={() => dispatch(setCurrentPage(p))}
									className={currentPage === p ? "current_page" : "page"}
								>
									{p}
								</span>
							))}
							<span
								className={
									lastPage >= currentPage - 5
										? "current_page_last2"
										: "current_page_last"
								}
								onClick={() => dispatch(setCurrentPage(lastPage))}
							>
								{currentPage >= lastPage - 5 ? null : (
									<div>{lastPage === 1 ? null : <div>{lastPage}</div>}</div>
								)}
							</span>
						</Pages>
						<D>
							{repUser.map((rep, id) => (
								<D key={id}>
									<Dr>
										<Img
											src={
												"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
											}
										/>
										<div>
											<a target='_blank' href={rep.html_url}>
												{rep.name}
											</a>
											<H5>{rep.description}</H5>
										</div>
									</Dr>
								</D>
							))}
						</D>
					</Block2>
				</div>
			) : (
				<h1>репов нету</h1>
			)}
		</WrapperGrid>
	)
}

export default Repositories
