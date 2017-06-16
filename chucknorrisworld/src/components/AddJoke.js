import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { isLoggedIn } from '../utils/AuthService';
import { getJokeDetails } from '../utils/chucknorris-api';

class AddJoke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputTxt: ''};
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.storeEmail = this.storeEmail.bind(this);
    }


    storeEmail = function(e){
        console.log(e.target.value);
        this.setState({inputTxt:e.target.value});
    }
    handleClick = function(e) {
        //var a = React.findDOMNode(this.refs.email_id).value;
        console.log('ssssssssss'+this.state.inputTxt);
        //this.getData();
        // this.setState({
        //     inputTxt: "sdfsdf"
        // });
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <Nav />
                <h3 className="text-center">Add Joke Form </h3>
                <hr />
                <form data-toggle="validator" >

                    <div className="form-group has-error">
                        <label htmlFor="email_id" className="control-label">Email</label>
                        <input type="email" onChange={this.storeEmail} className="form-control" id="email_id" name="email_id" aria-describedby="email_help" placeholder="Email"  required autoFocus />
                    </div>

                    <div className="form-group">
                        <button onClick={this.handleClick} className="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default AddJoke;