import React from "react";

export default class ListWidgetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            text: '',
            name: '',
            type: 'LIST',
            value: 'false'
        }
    }

    componentDidMount() {
        this.setState({
                          text: this.props.widget.text,
                          name: this.props.widget.name,
                          type: this.props.widget.type,
                          value: this.props.widget.value
                      })
    }

    update = () =>
        this.props.updateWidget(this.props.widget.id,
                                {
                                    ...this.props.widget,
                                    name: this.state.name,
                                    type: this.state.type,
                                    text: this.state.text,
                                    value: this.state.value
                                });

    render() {
        return (
            <div>
                <div>
                    <h3>List Widget</h3>
                    {this.state.editing &&
                     <span className='float-right'>
                         <button className="btn btn-warning">
                                 <i className="fa fa-arrow-up"/>
                             </button>
                         <button className="btn btn-warning">
                                 <i className="fa fa-arrow-down"/>
                             </button>
                         <button className={'btn btn-primary'}
                                 onClick={() => {
                                     this.update();
                                     this.setState({editing: false})
                                 }}>
                            <i className="fa fa-check"/>
                        </button>
                         <button className="btn btn-danger"
                                 onClick={() => this.props.delete(this.props.widget)}>
                               <i className="fa fa-trash"/>
                         </button>
                    </span>
                    }


                    {!this.state.editing &&
                     <span className="float-right">
                         <button className="btn btn-success"
                                 onClick={() => this.setState({editing: true})}>
                             <i className="fa fa-pencil"/>
                         </button>
                     </span>
                    }

                </div>
                {!this.state.editing &&
                 <div>
                     <h4>
                         {this.props.widget.name}
                     </h4>
                     <div> {this.state.value === 'true' &&
                            <ol>
                                {this.state.text.split('\n')
                                    .map((li, i) =>
                                             <li key={i}>
                                                 {li}
                                             </li>
                                    )}
                            </ol>}
                         {this.state.value === 'false' &&
                          <ul>
                              {this.state.text.split('\n')
                                  .map((li, i) =>
                                           <li key={i}>
                                               {li}
                                           </li>
                                  )}
                          </ul>}
                     </div>
                 </div>}
                {this.state.editing &&
                 <form>
                     <div className="form-group row">
                         <h3 className="col-md-2 col-form-label">
                             Text:
                         </h3>
                         <div className={'col-md-10'}>
                            <textarea value={this.state.text}
                                      className="form-control"
                                      placeholder="Text"
                                      onChange={(e) => this.setState({text: e.target.value})}/>
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

                     <div className={'form-group row'}>
                         <h3 className="col-md-2 col-form-label">
                             Widget Type:
                         </h3>
                         <div className={'col-md-10'}>
                             <select className="form-control"
                                     value={this.state.type}
                                     onChange={(e) => this.setState({type: e.target.value})}>
                                 <option value='IMAGE'>Image</option>
                                 <option value='LIST'>List</option>
                                 <option value='HEADING'>Heading</option>
                                 <option value='PARAGRAPH'>Paragraph</option>
                             </select>
                         </div>
                     </div>

                     <div className={'form-group row'}>
                         <h3 className="col-md-2 col-form-label">
                             List Type:
                         </h3>
                         <div className={'col-md-10'}>
                             <select className="form-control"
                                     value={this.state.value}
                                     onChange={(e) => this.setState({value: e.target.value})}>
                                 <option value='true'>Ordered List</option>
                                 <option value='false'>Unordered List</option>
                             </select>
                         </div>
                     </div>
                 </form>}
            </div>
        )
    }
}