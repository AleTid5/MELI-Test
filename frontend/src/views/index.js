import React, { Component } from "react";
import Search from '../components/search';

class Index extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            currentSearch: []
        }
    }

    render() {
        return (
          <div className="app">
              <Search props={this.props} search={this.props.location.search} history={this.props.history}/>
          </div>
        );
    }
}

export default Index;
