import { Component } from 'react';
import Tick from './Tick';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Life Cycle Component"
        }
        console.log('constructor');
    }

    componentDidMount() {
        const title = this.props.title;
        if (title) {
            this.setState({title: title});
        }
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    ubahTitle = () => {
        this.setState({title: "Title Berubah!"});
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={() => this.ubahTitle()}>Ubah Title</button>
                <hr/>
                <Tick />
            </div>
        )
    }
}

export default LifeCycle;