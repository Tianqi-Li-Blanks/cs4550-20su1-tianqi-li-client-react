import React from "react";

import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
import ParagraphWidgetComponent from "./widgets/ParagraphWidgetComponent";
import YouTubeWidgetComponent from "./widgets/YouTubeWidgetComponent";
import ListWidgetComponent from "./widgets/ListWidgetComponent";
import ImageWidgetComponent from "./widgets/ImageWidgetComponet";

class WidgetListComponent extends React.Component {
    state = {
        newWidgetType: 'HEADING',
        newWidgetName: 'New Widget',
    }

    componentDidMount() {
        console.log(this.props.params.topicId)
        this.props.findWidgetsForTopic(this.props.params.topicId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.topicId !== this.props.params.topicId) {
            this.props.findWidgetsForTopic(this.props.params.topicId);
        }
    }

    delete = (widget) => {
        this.props.deleteWidget(widget.id);
        this.props.widgets.forEach(widget => {
            if (widget.widgetOrder > widget.widgetOrder) {
                this.props.updateWidget(widget.id, {...widget, widgetOrder: widget.widgetOrder - 1})
            }
        })
    };


    render() {
        return (
            <div>
                <h2>Widget List </h2>
                <h2>{this.props.params.topicId}</h2>
                <ul className="list-group">
                    {this.props.params.topicId !== undefined &&
                     this.props.widgets
                         .map(widget =>
                                  <li key={widget.id}
                                      className="list-group-item">
                                      {
                                          widget.type === 'HEADING' &&
                                          <HeadingWidgetComponent
                                              widget={widget}
                                              updateWidget={this.props.updateWidget}
                                              delete={this.props.delete}/>
                                      }
                                      {
                                          widget.type === 'PARAGRAPH' &&
                                          <ParagraphWidgetComponent
                                              widget={widget}
                                              updateWidget={this.props.updateWidget}
                                              delete={this.props.delete}/>
                                      }
                                      {
                                          widget.type === 'LIST' &&
                                          <ListWidgetComponent
                                              widget={widget}
                                              updateWidget={this.props.updateWidget}
                                              delete={this.props.delete}/>
                                      }
                                      {
                                          widget.type === 'IMAGE' &&
                                          <ImageWidgetComponent
                                              widget={widget}
                                              updateWidget={this.props.updateWidget}
                                              delete={this.props.delete}/>
                                      }
                                  </li>)}
                </ul>
                <select
                    onChange={(event) =>
                        this.setState({newWidgetType: event.target.value})}
                    value={this.state.newWidgetType}>
                    <option value="HEADING">Heading</option>
                    <option value="PARAGRAPH">Paragraph</option>
                    <option value='LIST'>List</option>
                    <option value='IMAGE'>Image</option>
                </select>

                <button onClick={() => this.props.createWidget(
                    this.props.params.topicId,
                    {
                        type: this.state.newWidgetType,
                        name: this.state.newWidgetName,
                        widgetOrder: this.props.widgets.length + 1,
                        size: 1,
                    }
                )}>
                    Create Widget
                </button>
            </div>
        )
    }
}

export default WidgetListComponent
