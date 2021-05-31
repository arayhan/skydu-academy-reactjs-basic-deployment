import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
	return (
		<div className={`card ${props.isDarkMode ? "darkMode" : ""}`}>
			<h1>{props.title}</h1>
			<Link to={`/detail/${props.title}`}>Read More</Link>
			<button onClick={() => props.handleLike()}>Like</button> : {props.like}
		</div>
	);
};

Card.defaultProps = {
	title: "Your Title",
	deskripsi: "Your Description",
};

export default Card;
