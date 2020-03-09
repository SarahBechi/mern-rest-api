/* import React, { Component } from 'react';
import axios from 'axios';

class Contacts extends Component {
    state = { todos: [] }


    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ todos: data })
                console.log(this.state.todos)
            })
    }


    render() {

        return (
            <div className="container">
                <h1>React Axios Example</h1>
                <div className="col-xs-8">

                    {this.state.todos.map((el, i) => (
                        <div className="card" key={i}>
                            <div className="card-body" >
                                <h5 className="card-title">{el.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">

                                </h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Contacts; */