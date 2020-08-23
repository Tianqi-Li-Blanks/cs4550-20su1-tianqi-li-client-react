import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {Link} from "react-router-dom";

export default class CourseTableComponent extends React.Component{
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr className="bg-light">
                        <th>Title</th>
                        <th className="d-none d-md-table-cell">Owner</th>
                        <th className="d-none d-lg-table-cell">Last Modified</th>
                        <th >
                            <span className="float-right">
                                <Link to='/grid/courses' className="btn">
                                    <i className="fa fa-th"/>
                                </Link>
                                <i className="fa fa-sort-alpha-asc btn" />
                            </span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>
                         <CourseRowComponent
                             deleteCourse={this.props.deleteCourse}
                             key = {course._id}
                             course = {course}/>
                    )}
                    </tbody>
                </table>
            </div>
        )

    }
}