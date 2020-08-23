const initialState = {
    newTopicTitle: 'Some Topic',
    topics: []
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map(
                    topic => topic.id === action.updateTopic.id ?
                             action.updateTopic: topic )
            }
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics
            }
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [...state.topics, action.topics]
            }
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => topic.id !== action.topics)
            }
        default:
            return state
    }
}

export default topicReducer