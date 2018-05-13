import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
        }
    }

    componentWillReceiveProps(props) {

        this.setState({
            todos: props.todos
        });
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.state.todos && this.state.todos.map((item, index) => {
                            return (
                                <li key={index} className="float-left list-group-item">
                                    {item.task}
                                    <span className="float-right">
                                        <button
                                            key={index}
                                            id={item._id + ' ' + index}
                                            data-index={index}
                                            onClick={(el) => { this.props.deleteTodo(el) }}
                                            className="btn btn-danger">
                                            Delete
                                        </button>
                                    </span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}


export default TodoList;