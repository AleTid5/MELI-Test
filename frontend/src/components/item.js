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
    this.state.categories = props.props.location.state.categories;
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
          <Col className="col-md-8">
            <img src={this.state.item.picture} alt="Product" />
            <h3>Descripción del producto</h3>
            <p>{this.state.item.id}</p>
          </Col>
          <Col className="col-md-4 item-description">
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
              <Card md="12" className="card-body">
                { this.renderItem() }
              </Card>
            </Col>
          </Row>
        </React.Fragment>
    );
  }
}

export default Item;
