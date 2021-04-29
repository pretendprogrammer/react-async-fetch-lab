import React, { Component } from "react";

// create your App component here
export default class App extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(result => {
                console.log(result.people)
            })
    }

    render() {
        return(
            <div>
                {this.state.list}
            </div>
        )
    }
}