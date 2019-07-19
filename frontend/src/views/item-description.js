import React, { Component } from "react";
import Search from '../components/search';
import Item from '../components/item';

class ItemDescription extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="app">
                    <Search history={this.props.history} />
                    <Item props={this.props} />
                </div>
            </React.Fragment>
        );
    }
}

export default ItemDescription;
