import React from "react";
import LessonsTabsContainer from "../container/LessonsTabsContainer";
import {Link} from "react-router-dom";
import ModuleListContainer from "../container/ModuleListContainer"
import TopicPillContainer from "../container/TopicPillContainer";
import WidgetListComponent from "./WidgetListComponent";
import WidgetListContainer from "../container/WidgetListContainer";

// stateless component
const CourseEditorComponent = ({match}) => {
    return(
        <div>
            {match.params.courseID}
            <Link to="/table/courses">
                Back
            </Link>
            <h2>Course Editor</h2>

            <div className="row">
                <div className="col-4">
                    <ModuleListContainer {...match}/>
                </div>
                <div className="col-8">
                    <LessonsTabsContainer {...match}/>
                    <TopicPillContainer {...match}/>
                    <WidgetListContainer {...match}/>
                </div>
            </div>
        </div>
    )
}

export default CourseEditorComponent
