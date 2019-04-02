import React, { Component } from 'react';

class Course extends Component {
    render() {
        return (
            <div>
                {this.props.location.state.title ? <h1>{this.props.location.state.title}</h1> : null}
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;