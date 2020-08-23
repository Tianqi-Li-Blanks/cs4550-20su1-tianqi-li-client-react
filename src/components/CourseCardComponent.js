import React from "react";
import {Link} from "react-router-dom";
import courseService from '../services/CourseService'

export default class CourseCardComponent extends React.Component{
    state = {
        editing: false,
        course: this.props.course
    }

    setEditing = (editing) => this.setState({editing:editing})

    ok = () =>
        courseService.updateCourse(
            this.state.course._id,
            this.state.course)
            .then(status => this.setEditing(false))

    updateCourseTitle = (newTitle) =>
        this.setState(prevState => ({
            course: {
                ...prevState.course,
                title: newTitle
            }
        }))

    render() {
        return(
            <div className="col mb-4">
                <div className="card">
                    <div className={this.state.editing ? 'card text-white bg-primary' : ''}>
                        <div className="card-body">
                            <Link to={`/editor/${this.state.course._id}`} className={this.state.editing ? 'text-white' : ''}>
                                <i className="fa-3x fa fa-file-text" />
                            </Link>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">
                                {!this.state.editing &&
                                 <h4>{this.state.course.title}</h4>
                                }
                                {
                                    this.state.editing &&
                                    <input
                                        className="form-control"
                                        onChange={(event) => this.updateCourseTitle(event.target.value)}
                                        value={this.state.course.title}/>
                                }
                                {
                                    !this.state.editing &&
                                    <button
                                        className="float-right btn btn-success"
                                        onClick={() => this.setEditing(true)}>
                                        <i className="fa fa-pencil"/>
                                    </button>
                                }
                                {
                                    this.state.editing &&
                                    <span className="float-right">
                                        <button className=" btn btn-success"
                                                onClick={this.ok}>
                                        <i className="fa fa-check-square" />
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={
                                                () => this.props.deleteCourse(this.props.course)}>
                                            <i className="fa fa-trash"/>
                                        </button>
                                    </span>
                                }
                                <br/>
                                <br/>
                                <div className={this.state.editing ? 'text-white' : ''}>
                                    <Link to='/editor' className={this.state.editing ? 'text-white' : ''}>
                                        <i className="fa fa-file-text-o" aria-hidden="true"/>
                                    </Link> Modified {this.state.course.modified} by {this.state.course.owner}
                                </div>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}