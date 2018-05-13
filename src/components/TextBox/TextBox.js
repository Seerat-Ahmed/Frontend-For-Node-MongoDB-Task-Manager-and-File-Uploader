import React, { Component } from 'react';
import './textbox.css';
import TodoList from '../TodoList/TodoList';
import {
    addTodoService,
    deleteAllTodoService,
    getTodosService,
    deleteTodoService
} from '../../services/todo';

class TextBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: '',
            todos: [],
            url: 'http://localhost:4000/api/todo'
        };
    }


    /**
     * Getting all todos
     */
    componentWillMount() {
        this.getTodos();
    }

    /**
     * Getting todos add setting to list
     */

    getTodos() {

        getTodosService()
            .then((res) => {
                if (res.status = 200) {
                    console.log(res.data);
                    this.setState({ todos: res.data });
                }
                else {
                    console.log(res);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }








    /**
     * Adding Todos to db
     */
    addTodo() {
        let todo = {
            task: this.state.task,
            isDone: false
        };

        addTodoService(todo)
            .then((res) => {
                if (res.status === 201) {
                    this.addTodoToList(res.data);
                    console.log(res);
                }
                else {
                    console.log(res);
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    /**
     * Add to list
     */
    addTodoToList(todo) {
        this.setState({
            todos: [...this.state.todos, todo],
            task: ''
        });
    }






    /**
     * Delete All Todo From Database 
     */
    deleteAll() {
        deleteAllTodoService()
            .then((res) => {
                if (res.status === 200) {
                    this.deleteAllTodoFromList();
                    console.log(res);
                }
                else {
                    console.log(res);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    /**
     * Delete todo from list
     */
    deleteAllTodoFromList() {
        this.setState({ todos: [] });
    }






    /**
     *  Deleting a specific todo
     */
    deleteOne(el) {
        let stringId = el.target.id;
        stringId = stringId.split(' ');

        const id = stringId[0];
        const index = stringId[1];

        if (id) {

            deleteTodoService(id)
                .then((res) => {
                    console.log(res);
                    if (res.status === 200)
                        this.deleteOneFromList(index);
                    else
                        console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    /**
     * Deleting todo from list
     */
    deleteOneFromList(index) {
        let todos = this.state.todos;
        todos.splice(index, 1);
        this.setState({ todos: [...todos] });
    }


    // Getting todo task
    onTextChange(element) {
        let text = element.target.value;
        this.setState({ task: text });
    }

    render() {
        return (
            <div className="textbox">

                <h1>Create Todo</h1>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="What you wanna do ?"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(el) => this.onTextChange(el)}
                        value={this.state.task} />


                    <div className="action">

                        <button
                            className="btn btn-primary"
                            onClick={() => { this.addTodo() }}>Add Todo</button>
                        <button
                            className="btn btn-danger"
                            onClick={() => { this.deleteAll() }}>
                            Delete All
                        </button>
                    </div>
                </div>

                <TodoList deleteTodo={this.deleteOne.bind(this)} todos={this.state.todos} />

            </div>
        )
    }
}

export default TextBox;