import React, { Component } from "react";
import { Link } from "react-router-dom";

class Blog extends Component {
	state = {
		posts: null,
	};

	componentDidMount() {
		this.fetchPosts();
	}

	fetchPosts = () => {
		fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then((data) => data.json())
			.then((json) => this.setState({ posts: json }));
	};

	handleDelete = (id) => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: "DELETE",
		});
	};

	render() {
		const { posts } = this.state;

		return (
			<div>
				<h1>Blog</h1>
				<Link to="/blog/form">Buat Blog</Link>
				{!posts && <div>Loading Posts...</div>}
				{posts && (
					<table border="1">
						<thead>
							<tr>
								<th>No.</th>
								<th>Title</th>
								<th>Body</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{posts.map((post, index) => (
								<tr>
									<td>{index + 1}</td>
									<td>{post.title}</td>
									<td>{post.body}</td>
									<td>
										<Link to={`/blog/${post.id}`}>Detail</Link>
										<br />
										<Link to={`/blog/form/${post.id}`}>Edit</Link>
										<button onClick={() => this.handleDelete(post.id)}>
											Hapus
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		);
	}
}

export default Blog;
