import React, { Component } from "react";
import Search from '../components/search';
import ItemList from '../components/item-list';

export default class Home extends Component {
    state = { currentSearch: [] }

    render = () => (
        <React.Fragment>
            <div className="app">
                <Search search={this.props.location.search} history={this.props.history}/>
                <ItemList search={this.props.location.search} history={this.props.history} categories={[]}/>
            </div>
        </React.Fragment>
    );
}
