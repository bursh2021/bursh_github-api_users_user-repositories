import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Alert = styled(motion.h2)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 150px;
	font-size: 50px;
`

function StartSearch() {
	return (
		<Alert
			initial={{ y: -200, opacity: 0 }}
			transition={{ delay: 0.3 }}
			animate={{ y: 0, opacity: 1 }}
		>
			start search people
		</Alert>
	)
}

export default StartSearch
