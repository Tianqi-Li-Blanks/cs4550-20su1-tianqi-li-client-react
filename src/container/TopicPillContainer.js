import {connect} from "react-redux";
import TopicService from "../services/TopicService";
import TopicPillComponent from "../components/TopicPillComponent";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        topics: state.topicReducer.topics,
        newTopicTitle: state.topicReducer.newTopicTitle,
        params: ownProps.params
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createTopic: (lessonId, newTopic) => {
            TopicService.createTopic(lessonId, newTopic)
                .then(newTopic => dispatch({type: 'CREATE_TOPIC',
                                               topics: newTopic}))
        },
        findTopicsForLesson: (lessonId) => {
            TopicService.findTopicsForLesson(lessonId)
                .then(actualTopics => dispatch({type: "FIND_TOPICS_FOR_LESSON",
                                                   topics: actualTopics}))
        },
        deleteTopic: (topicId) => {
            TopicService.deleteTopic(topicId)
                .then(dispatch({type: "DELETE_TOPIC",
                                   topics: topicId}))
        },
        updateTopic: (topicId, newTopicTitle) => {
            TopicService.updateTopic(topicId, newTopicTitle)
                .then(dispatch({type: 'UPDATE_TOPIC',
                                   updateTopic: newTopicTitle}))
        },
    }
}

const TopicPillContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(TopicPillComponent)

export default TopicPillContainer
export const ewq = 1
export const rew = 2
export const tre = 3