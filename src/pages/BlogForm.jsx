import React, { Component } from "react";

class BlogCreate extends Component {
	state = {
		title: "",
		body: "",
		id: this.props.match.params.id,
	};

	componentDidMount() {
		if (this.state.id) {
			this.fetchBlogDetail(this.state.id);
		}
	}

	fetchBlogDetail = (id) => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((data) => data.json())
			.then((json) => this.setState({ title: json.title, body: json.body }));
	};

	handleSubmit = () => {
		const { title, body, id } = this.state;
		const url = id
			? `https://jsonplaceholder.typicode.com/posts/${id}`
			: "https://jsonplaceholder.typicode.com/posts";

		fetch(url, {
			method: id ? "PUT" : "POST",
			body: JSON.stringify({
				title: title,
				body: body,
			}),
		});
	};

	render() {
		const { title, body, id } = this.state;

		return (
			<div>
				<h1>{id ? "Edit Blog" : "Buat Blog Baru"} </h1>
				<div>
					<table>
						<tr>
							<td>Title</td>
							<td>:</td>
							<td>
								<input
									value={title}
									onChange={(e) => this.setState({ title: e.target.value })}
									type="text"
								/>
							</td>
						</tr>
						<tr>
							<td>Body</td>
							<td>:</td>
							<td>
								<textarea
									value={body}
									onChange={(e) => this.setState({ body: e.target.value })}
									cols="30"
									rows="10"
								></textarea>
							</td>
						</tr>
					</table>
					<button onClick={() => this.handleSubmit()}>Submit</button>
				</div>
			</div>
		);
	}
}

export default BlogCreate;
