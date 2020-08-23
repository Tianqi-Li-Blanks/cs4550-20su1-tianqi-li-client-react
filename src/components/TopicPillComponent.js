import React from "react";
import {Link} from "react-router-dom";

class TopicPillComponent extends React.Component {
    state = {
        newTopicTitle: 'some other topic',
        editingTopic: {}
    }
    componentDidMount() {
        console.log(this.props.params.lessonId)
        this.props.findTopicsForLesson(this.props.params.lessonId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.params.lessonId !== this.props.params.lessonId) {
            this.props.findTopicsForLesson(this.props.params.lessonId)
        }
    }

    render() {
        return(
            <div>
                <h3>Topic Pills {this.props.params.lessonId}</h3>
                <ul className="list-group list-group-horizontal-md">
                    {this.props.topics.map(
                        topic =>
                            <li className={this.state.editingTopic.id === topic.id ?
                                           'list-group-item list-group-item-primary' :
                                           'list-group-item'}
                                key={topic.id}>
                                {this.state.editingTopic.id === topic.id &&
                                 <span>
                                     <input onChange={(e) => {
                                         const newTitle = e.target.value
                                         this.setState(prevState => ({
                                             editingTopic: {
                                                 ...prevState.editingTopic,
                                                 title: newTitle
                                             }
                                         }))
                                     }} value={this.state.editingTopic.title}/>
                                     <span className="float-right">
                                         <button
                                             onClick={() => this.props.deleteTopic(topic.id)}>
                                         <i className="fa fa-trash"/>
                                         </button>
                                         <button onClick={() => {
                                             this.props.updateTopic(
                                                 this.state.editingTopic.id,
                                                 this.state.editingTopic)
                                             this.setState({editingTopic: {}})}}>
                                             <i className="fa fa-check-square" />
                                         </button>
                                     </span>
                                 </span>
                                }
                                {this.state.editingTopic.id !== topic.id &&
                                 <span>
                                     <Link to={`/editor/${this.props.params.courseId}/modules/${this.props.params.moduleId}/lessons/${this.props.params.lessonId}/topics/${topic.id}`}>
                                           {topic.title}
                                     </Link>
                                     <button className="float-right"
                                         onClick={() => this.setState({editingTopic: topic})}>
                                         <i className="fa fa-pencil"/>
                                     </button>
                                 </span>
                                }
                            </li>)
                    }
                </ul>
                <span>
                    <input onChange={(event) =>
                        this.setState({newTopicTitle: event.target.value})}
                           value={this.state.newTopicTitle}/>
                    <button className="btn btn-secondary my-2 mr-sm-0"
                            onClick={() => this.props.createTopic(
                                this.props.params.lessonId, {title: this.state.newTopicTitle})}>
                        <i className="fa fa-plus"/>
                    </button>
                </span>
            </div>
        )
    }
}

export default TopicPillComponent

