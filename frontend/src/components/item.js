import React, { Component } from "react"
import { Button, Card, CardBody, Col, Row} from 'reactstrap';
import api from '../utils/api/api';
import shippingIcon from "../assets/img/ic_shipping.png";

class Item extends Component {
  constructor(props) {
    super(props);
    this.props = props;
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
      console.log(response);
      //this.setState({ item: response });
    })
  }

  static loading() {
    return (
        <div className="info">
          <h3>Cargando...</h3>
        </div>
    );
  }

  static noDataFound() {
    return (
        <div className="info">
          <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
          <ul>
            <li>Revisá la ortografía de la palabra.</li>
            <li>Utilizá palabras más genéricas o menos palabras.</li>
          </ul>
        </div>
    );
  }

  renderItemList() {
    if (! this.state.isReady) return Item.loading();

    if (! this.state.items.length) return Item.noDataFound();

    return (
        <Row>
          <Col className="col-md-8">
            <img src={this.state.item.thumbnail} alt="Product" />
            <h3>Descripción del producto</h3>
            <p>
              {this.state.item.id}
            </p>
          </Col>
          <Col className="col-md-4 item-description">
            <p>{this.state.item.condition === "new" ? "Nuevo" : "Usado"} - {this.state.item.sold_quantity} vendidos</p>
            <h3>{this.state.item.title}</h3>
            <h2>${this.state.item.price}</h2>
            <Button block={true} color="primary">Comprar</Button>
          </Col>
        </Row>
    );
  }

  renderBreadcrumbs() {
    return this.state.categories.map((item, key) => {
      return ( <span key={key}>{item} {this.state.categories.length === key + 1 || '> '}</span> );
    });
  }

  render() {
    return (
        <React.Fragment>
          <Row>
            <Col md={{ size: 8, offset: 2 }} className="pb-5">
              <div className="text-left breadcrumbs">
                { this.renderBreadcrumbs() }
              </div>
              <Card md="12" className="card-body">

              </Card>
            </Col>
          </Row>
        </React.Fragment>
    );
  }
}

export default Item;
