import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import courseService from "../services/CourseService"

class CourseManagerContainer extends React.Component {
    state = {
        layout: this.props.match.params.layout,
        courses: [],
        newCourseTitle: 'New Course'
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(actualArrayOfCourses =>
                      this.setState({courses:actualArrayOfCourses
                      }))

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.layout !== this.props.match.params.layout) {
            this.setState({
                              layout: this.props.match.params.layout
                          })
        }
    }

    setLayout = (layout) => {
        this.props.history.push(`/${layout}/courses`)
    }


    deleteCourse = (courseToDelete) =>
        courseService.deleteCourse(courseToDelete._id)
            .then(status => this.setState(prevState => ({
                courses: prevState
                    .courses.filter(course => course !== courseToDelete)
            })))


    addCourse = (title) =>
        courseService.createCourse({

               title: title,
               owner: 'me',
               modified: (new Date()).toDateString()
        })
            .then(theActualNewCourse =>
                      this.setState((prevState) => {
                          return {
                              courses: [
                                  ...prevState.courses,
                                  theActualNewCourse
                              ]
                          }
                      }))

    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <h2 className="navbar-brand">Course Manager</h2>
                    </div>

                    <input className="mr-sm-2"
                        onChange={
                            (event)=> this.setState(
                                {newCourseTitle: event.target.value}
                                )
                        }
                        value={this.state.newCourseTitle}
                        placeholder="New Course"/>
                    <button className="btn btn-success"
                        onClick={() => this.addCourse(this.state.newCourseTitle)}>
                        Add
                    </button>


                </nav>

                {
                    this.state.layout === 'table' &&
                    <div>
                        <button className="btn"
                            onClick={() => this.setLayout('grid')}>
                            <i className="fa-2x fa fa-th"/>
                        </button>
                        <CourseTableComponent
                            deleteCourse = {this.deleteCourse}
                            courses={this.state.courses}

                        />
                    </div>}

                {
                    this.state.layout === 'grid' &&
                    <div>
                        <button className="btn"
                            onClick={() => this.setLayout('table')}>
                            <i className="fa-2x fa fa-list"/>
                        </button>
                        <CourseGridComponent
                            deleteCourse = {this.deleteCourse}
                            courses={this.state.courses}/>
                    </div>
                }
            </div>
        )
    }
}


export default CourseManagerContainer