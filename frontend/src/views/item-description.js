import React, { Component } from "react";
import Search from '../components/search';
import Item from '../components/item';

class ItemDescription extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="app">
                    <Search search={this.props.location.state.search} history={this.props.history} />
                    <Item props={this.props} />
                </div>
            </React.Fragment>
        );
    }
}

export default ItemDescription;
