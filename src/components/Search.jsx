import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Modal from "./Modal"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Header = styled.div`
	background: blue;
	height: 15vh;
	display: flex;
	align-items: center;
	padding-left: 50px;
`
const Img = styled.img`
	height: 8vh;
	margin-right: 15px;
`
const Input = styled.input`
	outline: none;
	border: none;
	height: 9vh;
	width: 500px;

	@media (max-width: 567px) {
		width: 250px;
	}
	::placeholder {
		color: gray;
	}
`

const Button = styled.button`
	align-items: center;
	background: #727272;
	border: none;
	height: 9.5vh;
	padding: 15px;
	border-radius: 20px;
	position: absolute;
	right: 50px;
	:hover {
		background: black;
		color: white;
	}
`

const Search = ({ searchHandler, setInputText }) => {
	const [text, setText] = useState("")
	const [active, setActive] = useState(false)
	const onChange = e => {
		setText(e)
		setInputText(e)
	}

	function SearchKeyPress(e) {
		if (e.key === "Enter") {
			searchHandler(e)
			setText("")
		}
	}

	return (
		<Header>
			<Img
				src={
					"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
				}
			/>

			<Input
				type='text'
				placeholder='search  user'
				value={text}
				onChange={e => onChange(e.target.value)}
				onKeyPress={SearchKeyPress}
			/>
			<Button onClick={() => setActive(true)}>deploy</Button>
			<Modal active={active} setActive={setActive} />
			{/* <Button>
				<FontAwesomeIcon icon={faSearch} />
			</Button> */}
		</Header>
	)
}

export default Search
