import React, { Component } from "react"
import { Button, Card, Col, Row} from 'reactstrap';
import api from '../utils/api/api_items';
import Breadcrumb from "./base/breadcrumbs";
import Loader from './base/loader';
import NoData from './base/no-data';

class Item extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state.categories = props.props.location.state ? props.props.location.state.categories : [];
  }

  state = {
    item: {},
    categories: [],
    isReady: false
  };

  componentWillMount() {
    this.search();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search)
      this.search();
  }

  search() {
    const itemId = this.props.props.location.pathname
        .substr(this.props.props.location.pathname.lastIndexOf('/') + 1);

    api.searchItemById(itemId).then(response => {
      console.log(response)
      this.setState({
        item: response.item,
        isReady: true
      });
    })
  }

  renderItem() {
    if (! this.state.isReady) return (<Loader />);

    if (! Object.keys(this.state.item).length) return (<NoData />);

    return (
        <Row>
          <Col className="col-8 item-header">
            <div className="image-container">
              <img src={this.state.item.pictures[0]} alt="Product" />
            </div>
            <h3>Descripción del producto</h3>
            <p>{this.state.item.description}</p>
          </Col>
          <Col className="col-4 item-body">
            <p>{this.state.item.condition === "new" ? "Nuevo" : "Usado"} - {this.state.item.sold_quantity} vendidos</p>
            <h3>{this.state.item.title}</h3>
            <h2>${this.state.item.price.amount}</h2>
            <Button block={true} color="primary">Comprar</Button>
          </Col>
        </Row>
    );
  }

  renderBreadcrumbs() {
    return this.state.categories.map((item, key) => {
      const isLast = this.state.categories.length === key + 1;
      return (
        <span key={key} className="font-weight-bold">{item} {! isLast && '> '}</span>
      );
    });
  }

  render() {
    return (
        <React.Fragment>
          <Row>
            <Col md={{ size: 8, offset: 2 }} className="pb-5">
              <div className="text-left breadcrumbs">
                <Breadcrumb categories={this.state.categories} />
              </div>
              <Card md="12" className="card-body item-description">
                { this.renderItem() }
              </Card>
            </Col>
          </Row>
        </React.Fragment>
    );
  }
}

export default Item;
