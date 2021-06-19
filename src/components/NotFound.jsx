import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import StartSearch from "./StartSearch"
const NotFoundd = styled(motion.h1)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 130px;
`

function NotFound() {
	const isErrorAPI = useSelector(state => state.GithubApiUsers.isErrorAPI)

	return (
		<div>
			{isErrorAPI ? (
				<NotFoundd
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.4 }}
				>
					Not Found People
				</NotFoundd>
			) : (
				<StartSearch />
			)}
		</div>
	)
}

export default NotFound
