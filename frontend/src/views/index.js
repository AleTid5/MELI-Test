import React, { Component } from "react";
import Search from '../components/search';

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            currentSearch: []
        }
    }

    render = () => (
        <div className="app">
            <Search props={this.props} search={this.props.location.search} history={this.props.history}/>
        </div>
    );
}
