const initialState = {
  newLessonTitle: 'Some Lesson',
  lessons: []
}

const lessonReducer = (state=initialState, action) => {
  switch(action.type) {
    case "DELETE_LESSON":
      return {
        ...state,
        lessons: state.lessons.filter(lesson => lesson._id !== action.lessons)
      }
    case "FIND_LESSONS_FOR_MODULE":
      return {
        ...state,
        lessons: action.lessons
      }
    case "CREATE_LESSON":
      return {
        ...state,
        lessons: [...state.lessons, action.lessons]
      }
    case "UPDATE_LESSON":
      return {
        ...state,
        lessons: state.lessons.map(
            lesson => lesson._id === action.updateLesson._id ?
                      action.updateLesson: lesson )
      }
    default:
      return state
  }
}

export default lessonReducer
