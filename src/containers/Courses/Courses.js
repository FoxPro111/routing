import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selectedCourse: null
    }

    courseSelectHandler = (selectedCourse) => {
        this.props.history.push({
            pathname: this.props.match.url + '/' + selectedCourse,
            state: { title: this.state.courses[selectedCourse - 1].title }
        });
    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => (
                            <article className="Course"
                                onClick={() => this.courseSelectHandler(course.id)}
                                key={course.id}>
                                {course.title}
                            </article>
                        ))
                    }
                </section>
                <Route path={this.props.match.url + '/:id'} component={Course} />
            </div>
        );
    }
}

export default Courses;