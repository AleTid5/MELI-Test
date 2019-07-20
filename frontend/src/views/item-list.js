import React, { Component } from "react";
import Search from '../components/search';
import ItemList from '../components/item-list';

class Home extends Component {
    state = { currentSearch: [] }

    render() {
        return (
            <React.Fragment>
                <div className="app">
                    <Search search={this.props.location.search} history={this.props.history} />
                    <ItemList search={this.props.location.search} history={this.props.history} categories={[]}/>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
