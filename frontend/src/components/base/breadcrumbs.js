import React, { Component } from "react"

export default class Breadcrumbs extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    goBack = () => this.props.history.push(this.props.search ? `/items${this.props.search}` : '/');

    render = () => (
        <React.Fragment>
            {this.props.withBack &&
            <span>
                {/* eslint-disable-next-line */}
                <a onClick={this.goBack}>Volver{this.props.search && ' al listado | '}</a>
            </span>}
            {this.props.categories.map((item, key) => {
                const isLast = this.props.categories.length === key + 1;
                return (
                    <span key={key} className={isLast ? 'font-weight-bold' : ''}>{item} {!isLast && '> '}</span>
                );
            })}
        </React.Fragment>
    );
}