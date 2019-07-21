import React, { Component } from "react";
import { Row, Col, Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';
import logoImg from '../assets/img/Logo_ML.png';
import searchIcon from '../assets/img/ic_Search.png';
import qs from "qs";

class Search extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = {
        search: { value: qs.parse(this.props.search, { ignoreQueryPrefix: true }).search },
    }

    onKeyPress = (keyPressed) => {
        if (keyPressed.charCode === 13) this.onSearch(keyPressed);
    }

    onSearch = (event) => {
        event.preventDefault();
        if (this.state.search.value !== undefined) {
            this.props.history.push(`/items?search=${this.state.search.value}`);
        }
    }

    onSearchChange = (value) => this.setState({ search: { value: value } });

    goBack = () => this.props.history.push('/');

    render = () => (
        <React.Fragment>
            <div className="app-header">
                <Row>
                    <Col md={{size: 1, offset: 2}}
                         sm={{size: 1}}
                         xs={{size: 2}}>
                        <img src={logoImg} onClick={this.goBack} alt="LOGO" className="clickable"/>
                    </Col>
                    <Col md={{size: 7, offset: 0}}
                         sm={{size: 10}}
                         xs={{size: 9, offset: 1}}>
                        <InputGroup>
                            <Input
                                className="input-search"
                                placeholder="Nunca dejes de buscar"
                                defaultValue={this.state.search.value}
                                onChange={event => this.onSearchChange(event.target.value)}
                                onKeyPress={this.onKeyPress}
                            />
                            <InputGroupAddon addonType="append">
                                <Button className="btn-search" onClick={this.onSearch}>
                                    <img src={searchIcon} alt="SEARCH_ICON"/>
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}

export default Search;
