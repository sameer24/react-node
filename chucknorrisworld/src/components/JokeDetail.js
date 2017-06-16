import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { isLoggedIn } from '../utils/AuthService';
import { getJokeDetails } from '../utils/chucknorris-api';

class JokeDetail extends React.Component {
    constructor() {
        super();
        this.state = { jokes: [] };
    }

    getJokeDataDetails() {
        let jokeID = this.props.params.jokeID;
        getJokeDetails(jokeID).then((jokes) => {
            this.setState({ jokes });
        });
    }
    componentDidMount() {
        console.log('ssss');
        this.getJokeDataDetails();
    }
    render() {
const { jokes } = this.state;
        //console.log(jokeID);
//console.log(this.props.params.jokeID)
        return (
            <div>
                <Nav />
                <h3 className="text-center">Chuck Norris Food Jokes #{this.props.params.jokeID}</h3> 
                <hr />
                    <div className="col-sm-12" key={jokes.id}>
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    <span className="btn btn-warning">#{jokes.id}</span></h3>
                            </div>
                            <div className="panel-body">
                                <p> {jokes.joke} </p>
                            </div>
                        </div>
                        <Link to={`/`}   className="btn btn-success">Home Page</Link>
                    </div>
            </div>
            
        );
    }
}

export default JokeDetail;