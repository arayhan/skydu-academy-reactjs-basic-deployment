import React, { Component } from "react";
import Card from "../component/Card";
import "./Home.css";

class Home extends Component {
	state = {
		title: "Home",
		isShowCards: true,
		isDarkMode: false,
		listPokemon: [],
	};

	componentDidMount() {
		this.fetchPokemon();
	}

	fetchPokemon = () => {
		fetch("https://pokeapi.co/api/v2/pokemon")
			.then((data) => data.json())
			.then((json) => this.setState({ listPokemon: json.results }));
	};

	handleDarkMode = () => {
		this.setState({ isDarkMode: !this.state.isDarkMode });
	};

	sayHello = () => {
		alert("Halo");
	};

	handleLike = (index) => {
		const { listPokemon } = this.state;
		listPokemon[index].like = listPokemon[index].like + 1;
		this.setState({ listPokemon: listPokemon });
	};

	render() {
		console.log(this.state.listPokemon);
		return (
			<div>
				<h1>Halaman {this.state.title}</h1>
				<button
					onClick={() =>
						this.setState({ isShowCards: !this.state.isShowCards })
					}
				>
					{this.state.isShowCards ? "Hide Cards" : "Show Cards"}
				</button>
				<button
					onClick={() => {
						this.handleDarkMode();
						this.sayHello();
					}}
				>
					{this.state.isDarkMode ? "Light Mode" : "Dark Mode"}
				</button>

				{this.state.isShowCards ? (
					<div className="card-container">
						{this.state.listPokemon.map((pokemon, index) => {
							return (
								<Card
									isDarkMode={this.state.isDarkMode}
									title={pokemon.name}
									like={pokemon.like}
									deskripsi={pokemon.deskripsi}
									handleCopyDeskripsi={this.handleCopyDeskripsi}
									handleLike={() => this.handleLike(index)}
								/>
							);
						})}
					</div>
				) : null}
			</div>
		);
	}
}

export default Home;
