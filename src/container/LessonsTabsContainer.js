import {connect} from "react-redux";
import LessonService from "../services/LessonService";
import LessonsTabsComponent from "../components/LessonsTabsComponent";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        lessons: state.lessonReducer.lessons,
        newLessonTitle: state.lessonReducer.newLessonTitle,
        params: ownProps.params
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createLesson: (moduleId, newLesson) => {
            LessonService.createLesson(moduleId, newLesson)
                .then(actualLessons => dispatch({type: 'CREATE_LESSON',
                                                lessons: actualLessons}))
        },
        findLessonsForModule: (moduleId) => {
            LessonService.findLessonsForModule(moduleId)
                .then(actualLessons => dispatch({type: "FIND_LESSONS_FOR_MODULE",
                                                    lessons: actualLessons}))
        },
        deleteLesson: (lessonId) => {
            LessonService.deleteLesson(lessonId)
                .then(status => dispatch({type: "DELETE_LESSON",
                                   lessons: lessonId}))
        },
        updateLesson: (lessonId, newLessonTitle) => {
            LessonService.updateLesson(lessonId, newLessonTitle)
                .then(status => dispatch({type: 'UPDATE_LESSON',
                                   updateLesson: newLessonTitle}))
        },
    }
}

const LessonsTabsContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(LessonsTabsComponent)

export default LessonsTabsContainer
export const ewq = 1
export const rew = 2
export const tre = 3