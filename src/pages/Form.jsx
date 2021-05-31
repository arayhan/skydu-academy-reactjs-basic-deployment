import React, { Component } from "react";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputs: {
				nama: "",
				email: "",
				password: "",
			},
		};
	}

	handleSubmit = (event) => {
		const { nama, email, password } = this.state.inputs;
		console.log({ nama, email, password });
		event.preventDefault();
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		const { inputs } = this.state;
		inputs[name] = value;
		this.setState({ inputs: inputs });
	};

	render() {
		return (
			<div>
				<h1>Syntetic Events with Form</h1>
				<form onSubmit={(event) => this.handleSubmit(event)}>
					Nama :
					<input
						type="text"
						name="nama"
						value={this.state.inputs.nama}
						onChange={(event) => this.handleChange(event)}
					/>
					<br />
					Email :
					<input
						type="email"
						name="email"
						value={this.state.inputs.email}
						onChange={(event) => this.handleChange(event)}
					/>
					<br />
					Password :
					<input
						type="password"
						name="password"
						value={this.state.inputs.password}
						onChange={(event) => this.handleChange(event)}
					/>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default Form;
