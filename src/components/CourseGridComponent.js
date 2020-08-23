import React from "react";
import {Link} from "react-router-dom";
import CourseCardComponent from "./CourseCardComponent";

export default class CourseGridComponent extends React.Component{
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" >
                        <h6 className="navbar-brand">Recent documents</h6>
                    </div>
                    <div className="collapse navbar-collapse" >
                        <h6 className="navbar-brand">Owner by me</h6>
                    </div>
                    <span className="float-right">
                        <Link to='/table/courses' className="btn">
                            <i className="fa fa-list"/>
                        </Link>
                        <i className="fa fa-sort-alpha-asc btn" />
                        <i className="fa fa-folder" />
                    </span>
                </nav>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                        {
                            this.props.courses.map(course =>
                                  <CourseCardComponent
                                      deleteCourse={this.props.deleteCourse}
                                      key = {course._id}
                                      course = {course}/>
                            )}
                    </div>
            </div>
        )

    }
}