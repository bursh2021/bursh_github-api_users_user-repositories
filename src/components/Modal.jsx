/* eslint-disable react/jsx-pascal-case */
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Modal_ = styled(motion.div)`
	height: 100vh;
	width: 100vw;
	background: #0000009e;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Modal_content = styled(motion.div)`
	min-height: 100px;
	min-width: 100px;
	background: white;
	padding: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`

function Modal({ active, setActive }) {
	return (
		<>
			{" "}
			{active ? (
				<Modal_
					onClick={() => setActive(false)}
					initial={{
						scale: 0,
						opacity: 0,
					}}
					animate={{
						scale: 1,
						opacity: 1,
					}}
					transition={{
						delay: 0.1,
						duration: 0.4,
					}}
				>
					<Modal_content onClick={e => e.stopPropagation()}>
						<a href='https://deploy-react-bursh-api-github.web.app/'>deploy</a>
					</Modal_content>
				</Modal_>
			) : null}
		</>
	)
}

export default Modal
