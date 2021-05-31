import React, { useState, useEffect } from "react";

const BelajarHook = () => {
	const [count, setCount] = useState(0);
	const [title, setTitle] = useState("Halo Semua");

	const fetchPokemon = () => {
		fetch("https://pokeapi.co/api/v2/pokemon")
			.then((data) => data.json())
			.then((json) => console.log(json));
	};

	useEffect(() => {
		document.title = `${title} ${count}`;
		return () => {
			document.title = "React App";
		};
	});

	useEffect(() => {
		fetchPokemon();
	}, [title]);

	return (
		<div>
			<p>Anda klik sebanyak {count} kali</p>
			<button onClick={() => setCount(count + 1)}>Tambah Count</button>
			<button onClick={() => setTitle("Title Berubah")}>Ubah Title</button>
		</div>
	);
};

export default BelajarHook;
