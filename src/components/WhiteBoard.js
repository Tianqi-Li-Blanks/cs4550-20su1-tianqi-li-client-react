import React from "react";
import CourseManagerContainer from "../container/CourseManagerContainer";
import CourseEditorComponent from "./CourseEditorComponent";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";

class WhiteBoard extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Route
                        path='/'
                        exact={true}
                        component={HomeComponent}/>
                    <Route
                        path='/:layout/courses'
                        exact={true}
                        component={CourseManagerContainer}/>
                    <Route
                        path='/editor'
                        exact={true}
                        component={CourseEditorComponent}/>

                    <Route
                        path={['/editor/:courseId', '/editor/:courseId/modules/:moduleId',
                               '/editor/:courseId/modules/:moduleId/lessons/:lessonId',
                               '/editor/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId']}
                        exact={true}
                        component={CourseEditorComponent}/>

                </div>
            </BrowserRouter>
        )
    }
}

export default WhiteBoard