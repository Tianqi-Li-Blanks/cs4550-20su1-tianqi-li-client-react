import React from "react";
import {Link} from "react-router-dom";

class LessonsTabsComponent extends React.Component {
    state = {
        newLessonTitle: 'some other Lessons',
        editingLesson: {}
    }
    componentDidMount() {
        this.props.findLessonsForModule(this.props.params.moduleId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.params.moduleId !== this.props.params.moduleId) {
            this.props.findLessonsForModule(this.props.params.moduleId)
        }
    }

    render() {
        return(
            <div>
                <h3>Lesson Tabs {this.props.params.moduleId} </h3>
                <ul className="list-group list-group-horizontal-md">
                    {this.props.lessons.map(lesson =>
                             <li className={this.state.editingLesson._id === lesson._id ?
                                            'list-group-item list-group-item-primary' :
                                            'list-group-item'}
                                 key={lesson._id}>
                                 {this.state.editingLesson._id === lesson._id &&
                                  <span>
                                      <input onChange={(e) => {
                                          const newTitle = e.target.value
                                          this.setState(prevState => ({
                                              editingLesson: {
                                                  ...prevState.editingLesson,
                                                  title: newTitle
                                              }
                                          }))
                                      }} value={this.state.editingLesson.title}/>
                                      <span className="float-right">
                                          <button
                                              onClick={() => this.props.deleteLesson(lesson._id)}>
                                              <i className="fa fa-trash"/>
                                          </button>
                                          <button onClick={() => {
                                              this.props.updateLesson(
                                                  this.state.editingLesson._id,
                                                  this.state.editingLesson)
                                              this.setState({editingLesson: {}})}}>
                                              <i className="fa fa-check-square" />
                                          </button>
                                      </span>
                                  </span>
                                 }
                                 {this.state.editingLesson._id !== lesson._id &&
                                  <span>
                                      <Link to={`/editor/${this.props.params.courseId}/modules/${this.props.params.moduleId}/lessons/${lesson._id}`}>
                                           {lesson.title}
                                       </Link>
                                      <button className="float-right" onClick={() =>
                                          this.setState({editingLesson: lesson})}>
                                          <i className="fa fa-pencil"/>
                                      </button>
                                  </span>
                                 }
                             </li>
                        )
                    }
                </ul>
                <span>
                    <input onChange={(event) =>
                        this.setState({newLessonTitle: event.target.value})}
                           value={this.state.newLessonTitle}/>
                    <button className="btn btn-secondary my-2 mr-sm-0"
                            onClick={() => this.props.createLesson(
                                this.props.params.moduleId, {title: this.state.newLessonTitle})}>
                        <i className="fa fa-plus"/>
                    </button>
                </span>
            </div>
        )
    }
}

export default LessonsTabsComponent

// TODO: move mappers, connectors to separate container file like we did for module

