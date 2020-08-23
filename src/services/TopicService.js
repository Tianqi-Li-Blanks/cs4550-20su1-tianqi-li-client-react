const findTopicsForLesson = (lessonId) =>
    fetch(`https://git.heroku.com/frozen-depths-95944.git/api/lessons/${lessonId}/topics/`)
        .then(response => response.json())


const deleteTopic = (topicId) => {
    return fetch("https://git.heroku.com/frozen-depths-95944.git/api/topics/" + topicId, {
        method: 'DELETE'
    })
        .then(response => response.json())
}

const updateTopic = (topicId, topic) =>
    fetch(`https://git.heroku.com/frozen-depths-95944.git/api/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const createTopic = (lessonId, topic) =>
    fetch(`https://git.heroku.com/frozen-depths-95944.git/api/lessons/${lessonId}/topics/`, {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export default {
    createTopic,
    updateTopic,
    deleteTopic,
    findTopicsForLesson
}
