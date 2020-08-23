const findWidgetsForTopic = (tid) =>
  fetch(`https://git.heroku.com/frozen-depths-95944.git/api/topics/${tid}/widgets`)
    .then(response => response.json())

const deleteWidget = (wid) =>
  fetch(`https://git.heroku.com/frozen-depths-95944.git/api/widgets/${wid}`, {
    method: 'DELETE'
  }).then(response => response.json())

const createWidget = (tid, widget) =>
  fetch(`https://git.heroku.com/frozen-depths-95944.git/api/topics/${tid}/widgets`, {
    method: 'POST',
    body: JSON.stringify(widget),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())

export const findWidgetById = (wid) =>
    fetch(`https://git.heroku.com/frozen-depths-95944.git/api/widgets/${wid}`)
        .then(response => response.json());

const updateWidget = (wid, widget) =>
    fetch(`https://git.heroku.com/frozen-depths-95944.git/api/widgets/${wid}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


export default {
    updateWidget,
    createWidget,
    deleteWidget,
    findWidgetById,
    findWidgetsForTopic
}
