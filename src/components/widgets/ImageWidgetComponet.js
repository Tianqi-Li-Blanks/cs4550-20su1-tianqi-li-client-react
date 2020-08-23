import React from "react";

export default class ImageWidgetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            name: '',
            type: 'IMAGE',
            url: '',
        }
    }

    componentDidMount() {
        this.setState({
                          url: this.props.widget.url,
                          order: this.props.widget.widgetOrder,
                          name: this.props.widget.name,
                          type: this.props.widget.type,
                      })
    }

    update = () => {
        this.props.updateWidget(this.props.widget.id,
                                {
                                    ...this.props.widget,
                                    url: this.state.url,
                                    name: this.state.name,
                                    type: this.state.type,
                                });
    };

    render() {
        return <div>
            <div className="form-row">
                <h3>Image Widget</h3>
                {this.state.editing &&
                 <span>
                     <button className={'btn btn-warning'}>
                             <i className="fa fa-arrow-up"/>
                     </button>
                     <button className={'btn btn-warning'}>
                             <i className="fa fa-arrow-down"/>
                         </button>
                     <button className={'btn btn-primary'}
                             onClick={() => {
                                 this.update();
                                 this.setState({editing: false})
                             }}>
                        <i className="fa fa-check"/>
                    </button>
                    <button className={'btn btn-danger'}
                            onClick={() => this.props.delete(this.props.widget)}>
                        <i className="fa fa-trash"/>
                    </button>
                </span>}

                {!this.state.editing &&
                 <span className='float-right'>
                     <button className={'btn btn-success'}
                             onClick={() => this.setState({editing: true})}>
                         <i className="fa fa-pencil"/>
                     </button>
                 </span>}

            </div>

            {!this.state.editing &&
             <img src={this.props.widget.url} alt={this.props.widget.name}/>
            }

            {this.state.editing &&
             <form>
                 <div className={'form-group row'}>
                     <h3 className="col-md-2 col-form-label">
                         Url:
                     </h3>
                     <div className="col-md-10">
                        <textarea value={this.state.url}
                                  placeholder="Url"
                                  className="form-control"
                                  onChange={(e) => this.setState({url: e.target.value})}/>
                     </div>
                 </div>
                 <div className="form-group row">
                     <h3 className="col-md-2 col-form-label">
                         Widget Name:
                     </h3>
                     <div className={'col-md-10'}>
                         <input value={this.state.name}
                                placeholder="Widget Name"
                                className="form-control"
                                onChange={(e) => this.setState({name: e.target.value})}/>
                     </div>
                 </div>

                 <div className="form-group row">
                     <h3 className="col-md-2 col-form-label">
                         Widget Type:
                     </h3>
                     <div className={'col-md-10'}>
                         <select className="form-control"
                                 value={this.state.type}
                                 onChange={(e) => this.setState({type: e.target.value})}>
                             <option value='HEADING'>Heading</option>
                             <option value='PARAGRAPH'>Paragraph</option>
                             <option value='IMAGE'>Image</option>
                             <option value='LIST'>List</option>
                         </select>
                     </div>
                 </div>

             </form>}
        </div>
    }
}