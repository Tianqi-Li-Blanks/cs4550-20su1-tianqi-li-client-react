import React from "react";
import {Link} from "react-router-dom";

class ModuleListComponent extends React.Component {
  state = {
    newModuleTitle: 'some other module',
    editingModule: {},
  }

  componentDidMount() {
    // this.props.findAllModules()
    this.props.findModuleForCourse(this.props.params.courseId)
  }

  render() {
    return(
        <div>
            <h1>Modules ({this.props.modules.length})</h1>
            ({this.props.params.courseId})
            <ul className="wbdv-module-list list-group">
              {this.props.modules.map(module =>
                  <li className={this.state.editingModule._id === module._id ?
                                 'list-group-item list-group-item-primary' : 'list-group-item'}
                      key={module._id}>
                    {this.state.editingModule._id === module._id &&
                        <span>
                            <input onChange={(e) => {
                                const newTitle = e.target.value
                                this.setState(prevState => ({
                                    editingModule: {
                                        ...prevState.editingModule,
                                      title: newTitle
                                    }
                                  }))
                                }}
                                   value={this.state.editingModule.title}/>
                                   <span className="float-right">
                                       <button onClick={() => this.props.deleteModule(module._id)}>
                                          <i className="fa fa-trash"/>
                                        </button>
                                        <button onClick={() => {
                                            this.props.updateModule(this.state.editingModule._id,
                                                                    this.state.editingModule)
                                            this.setState({editingModule: {}})
                                        }}>
                                          <i className="fa fa-check-square" />
                                        </button>
                                   </span>
                        </span>
                    }
                    {this.state.editingModule._id !== module._id &&
                      <span>
                          <Link to={`/editor/${this.props.params.courseId}/modules/${module._id}`}>
                            {module.title}
                          </Link>
                          <button className="float-right"
                              onClick={() => this.setState({editingModule: module})}>
                              <i className="fa fa-pencil"/>
                          </button>
                      </span>
                    }
                  </li>
                )
              }
              <br/>
              <span>
              <input onChange={(event) =>
                  this.setState({newModuleTitle: event.target.value})}
                   value={this.state.newModuleTitle}/>
              <button className="btn btn-secondary my-2 mr-sm-0"
                 onClick={() => this.props.createModule(
                     this.props.params.courseId, {title: this.state.newModuleTitle})}>
                 <i className="fa fa-plus"/>
              </button>
              </span>
            </ul>
        </div>
    )
  }
}

export default ModuleListComponent
