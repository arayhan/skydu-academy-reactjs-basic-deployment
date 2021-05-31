import { Component } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogForm from "./pages/BlogForm";
import BelajarHook from "./pages/BelajarHook";
import Tick from "./component/Tick";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/blog">Blog</Link>
							</li>
							<li>
								<Link to="/belajar-hook">Belajar Hook</Link>
							</li>
							<li>
								<Link to="/tick">Tick</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/detail/:pokemon" component={Detail} />
						<Route path="/blog/form/:id" component={BlogForm} />
						<Route path="/blog/form" component={BlogForm} />
						<Route path="/blog" component={Blog} />
						<Route path="/belajar-hook" component={BelajarHook} />
						<Route path="/tick" component={Tick} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
