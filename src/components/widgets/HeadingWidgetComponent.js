import React from "react";

export default class HeadingWidgetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            type: 'HEADING',
            text: '',
            name: '',
            size: this.props.widget.size,
            headingSize: "h1"
        }
    }

    componentDidMount() {
        this.setState({
                          name: this.props.widget.name,
                          type: this.props.widget.type,
                          text: this.props.widget.text,
                          size: this.props.widget.size,
                      })
    }

    update = () => {
        this.props.updateWidget(this.props.widget.id,
                                {...this.props.widget,
                                    name: this.state.name,
                                    type: this.state.type,
                                    text: this.state.text,
                                    size: parseInt(this.state.headingSize)});
    };


    render() {
        return <div>
            <div className={'form-row'}>
                <h3>Heading Widget</h3>
                {this.state.editing &&
                 <span>
                     <select value={this.state.size}
                                 onChange={(e) => this.setState({size: parseInt(e.target.value)})}>
                        <option value="1">Heading 1</option>
                        <option value="2">Heading 2</option>
                        <option value="3">Heading 3</option>
                        <option value="4">Heading 4</option>
                        <option value="5">Heading 5</option>
                        <option value="6">Heading 6</option>
                    </select>
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
                     </span>
                }
            </div>

            {!this.state.editing &&
             <div>
                 {this.state.size === 1 && <h1>{this.props.widget.name}</h1>}
                 {this.state.size === 2 && <h2>{this.props.widget.name}</h2>}
                 {this.state.size === 3 && <h3>{this.props.widget.name}</h3>}
                 {this.state.size === 4 && <h4>{this.props.widget.name}</h4>}
                 {this.state.size === 5 && <h5>{this.props.widget.name}</h5>}
                 {this.state.size === 6 && <h6>{this.props.widget.name}</h6>}
                 <p>{this.props.widget.text}</p>
             </div>}

            {this.state.editing &&
             <form>
                 <div className={'form-group row'}>
                     <h3 className="col-md-2 col-form-label">
                         Text:
                     </h3>
                     <div className={'col-md-10'}>
                        <textarea value={this.state.text}
                                  placeholder="Paragraph text"
                                  className="form-control"
                                  onChange={(e) => this.setState({text: e.target.value})}/>
                     </div>
                 </div>
                 <div className={'form-group row'}>
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

                 <div className={'form-group row'}>
                     <h3 className="col-md-2 col-form-label">
                         Widget Type:
                     </h3>
                     <div className={'col-md-10'}>
                         <select className="form-control"
                                 value={this.state.type}
                                 onChange={(e) => this.setState({type: e.target.value})}>
                             <option value='HEADING'>Heading</option>
                             <option value='PARAGRAPH'>Paragraph</option>
                             <option value='LIST'>List</option>
                             <option value='IMAGE'>Image</option>
                         </select>
                     </div>
                 </div>

             </form>}
        </div>
    }
}