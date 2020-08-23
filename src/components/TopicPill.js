import React from "react";

const TopicPill = () =>
    <div>
        <br/>
        <ul className="nav nav-pills wbdv-topic-pill-list">
            <li className="nav-item wbdv-topic-pill">
                <button type="button" className="btn btn-secondary mr-sm-2 ">Topic 1</button>
            </li>
            <li className="nav-item wbdv-topic-pill-list">
                <button type="button" className="btn btn-secondary mr-sm-2 active">Topic 2</button>
            </li>
            <li className="nav-item wbdv-topic-pill-list">
                <button type="button" className="btn btn-secondary mr-sm-2">Topic 3</button>
            </li>
            <li className="nav-item wbdv-topic-pill-list">
                <button type="button" className="btn btn-secondary mr-sm-2">Topic 4</button>
            </li>

            <button className="wbdv-topic-add-btn btn btn-secondary mr-sm-2" type="button">
                <i className="fa fa-plus"/>
            </button>
        </ul>
        <br/>
        <form className="form-inline float-right">
            <button className="btn btn-success mr-sm-2" type="button">
                saved
            </button>
            <h5 className="mr-sm-2">
                Preview
            </h5>
            <i className="fa fa-toggle-off fa-2x my-2 my-sm-0" aria-hidden="true"/>
        </form>

    </div>



export default TopicPill
