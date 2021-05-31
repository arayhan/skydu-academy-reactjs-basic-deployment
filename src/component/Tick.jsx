import React, { useState, useEffect } from "react";

const Tick = () => {
	const title = "Component Detik";
	const [detik, setDetik] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log("detik : " + detik);
			setDetik(detik + 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	return (
		<div>
			<h1>{title}</h1>
			<div>Detik ke : {detik}</div>
		</div>
	);
};

export default Tick;
