import {connect} from "react-redux";
import WidgetService from "../services/WidgetService";
import WidgetListComponent from "../components/WidgetListComponent";

const stateToPropertyMapper = (state, ownProps) => {
    return {
        widgets: state.widgetReducer.widgets,
        params: ownProps.params
    }
};

const dispatchToPropertyMapper = (dispatcher) => {
    return {
        createWidget: (tid, widget) =>
            WidgetService.createWidget(tid, widget)
                .then(actualNewWidgetFromServer =>
                          dispatcher({
                                         type: "CREATE_WIDGET",
                                         widget: actualNewWidgetFromServer
                                     })
                ),
        deleteWidget: (wid) =>
            WidgetService.deleteWidget(wid)
                .then(status =>
                          dispatcher({
                                         type: "DELETE_WIDGET",
                                         widgetId: wid
                                     })),
        findWidgetsForTopic: (tid) =>
            WidgetService.findWidgetsForTopic(tid)
                .then(actualWidgetsFromServer =>
                          dispatcher({
                                         type: "FIND_WIDGETS_FOR_TOPIC",
                                         widgetsFromServer: actualWidgetsFromServer
                                     })),

        updateWidget: (wid, widget) =>
            WidgetService.updateWidget(wid, widget)
                .then(status =>
                          dispatcher({
                                         type: "UPDATE_WIDGET",
                                         updatedWidget: widget
                                     }))
    }
};

const WidgetListContainer = connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(WidgetListComponent);

export default WidgetListContainer
export const ewq = 1;
export const rew = 2;
export const tre = 3;