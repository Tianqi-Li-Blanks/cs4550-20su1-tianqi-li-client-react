import React from "react";

const ModuleList = () =>
    <div>
        <ul className="wbdv-module-list list-group">
            <br/>
            <li className="wbdv-module-item list-group-item">
                Module 1 - jQuery
                <button className="wbdv-module-item-delete-btn float-right btn btn-danger btn-sm">
                    <i className="fa fa-trash"/>
                </button>
            </li>
            <br/>
            <li className="wbdv-module-item list-group-item">
                Module 2 - React
                <button className="wbdv-module-item-delete-btn float-right btn btn-danger btn-sm">
                    <i className="fa fa-trash"/>
                </button>
            </li>
            <br/>
            <li className="wbdv-module-item list-group-item">
                Module 3 - Redux
                <button className="wbdv-module-item-delete-btn float-right btn btn-danger btn-sm">
                    <i className="fa fa-trash"/>
                </button>
            </li>
            <br/>
            <li className="wbdv-module-item list-group-item">
                Module 4 - Native
                <button className="wbdv-module-item-delete-btn float-right btn btn-danger btn-sm">
                    <i className="fa fa-trash"/>
                </button>
            </li>
            <br/>
            <li className="wbdv-module-item list-group-item active">
                Module 5 - Angular
                <button className="wbdv-module-item-delete-btn float-right btn btn-danger btn-sm">
                    <i className="fa fa-trash"/>
                </button>
            </li>
            <br/>
            <li className="wbdv-module-item list-group-item">
                Module 6 - Node
                <button className="wbdv-module-item-delete-btn float-right btn btn-danger btn-sm">
                    <i className="fa fa-trash"/>
                </button>
            </li>
            <br/>
            <li className="wbdv-module-item list-group-item">
                >Module 7 - Mongo
                <button className="wbdv-module-item-delete-btn float-right btn btn-danger btn-sm">
                    <i className="fa fa-trash"/>
                </button>
            </li>
            <br/>
            <button className="wbdv-module-item-add-btn btn btn-secondary my-2 mr-sm-0">
                <i className="fa fa-plus"/>
            </button>
        </ul>
    </div>

export default ModuleList
