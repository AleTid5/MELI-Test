import React, { Component } from "react"

export default class Breadcrumbs extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <React.Fragment>
                { this.props.categories.map((item, key) => {
                    const isLast = this.props.categories.length === key + 1;
                    return (
                        <span key={key} className={isLast ? 'font-weight-bold' : ''}>{item} {! isLast && '> '}</span>
                    );
                })}
            </React.Fragment>
        );
    }
}