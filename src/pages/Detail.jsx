import React, { Component } from "react";

class Detail extends Component {
	state = {
		params: this.props.match.params.pokemon,
		details: null,
		encounters: null,
		isError: false,
		errorMessage: null,
	};

	componentDidMount() {
		this.fetchPokemonDetail();
	}

	fetchPokemonDetail = () => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.params}`)
			.then((data) => data.json())
			.then((json) => {
				this.setState({ details: json });
				this.fetchPokemonEncounters(json.location_area_encounters);
			})
			.catch((err) => {
				console.log({ err });
				this.setState({ isError: true, errorMessage: err.message });
			});
	};

	fetchPokemonEncounters = (encountersURL) => {
		fetch(encountersURL)
			.then((data) => data.json())
			.then((json) => this.setState({ encounters: json }))
			.catch((err) => this.setState({ isError: true }));
	};

	render() {
		const { details, params, encounters, errorMessage } = this.state;
		console.log(encounters);
		return (
			<div>
				<div>Detail Pokemon : {params}</div>
				{errorMessage && <div>ERROR : {errorMessage}</div>}
				{!details && !errorMessage && <div>Loading Details...</div>}
				{details && (
					<div>
						<h1>Sprites</h1>
						<img src={details.sprites.back_default} alt="" />
						<img src={details.sprites.back_female} alt="" />
						<img src={details.sprites.back_shiny} alt="" />
						<img src={details.sprites.back_shiny_female} alt="" />
						<img src={details.sprites.front_default} alt="" />

						{!encounters && <div>Loading Encounters...</div>}
						{encounters && encounters.length && (
							<>
								<h1>Encounters</h1>
								{encounters.map((encounter) => (
									<div>{encounter.location_area.name}</div>
								))}
							</>
						)}
					</div>
				)}
			</div>
		);
	}
}

export default Detail;
