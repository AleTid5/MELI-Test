import React, { Component } from "react";
import api from '../utils/api/api_items';
import Breadcrumb from './base/breadcrumbs';
import Loader from './base/loader';
import NoData from './base/no-data';
import {
  Row,
  Col,
  Card
} from 'reactstrap';
import shippingIcon from '../assets/img/ic_shipping.png';
import qs from "qs";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  state = {
    items: [],
    selectedItem: null,
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
    if (this.getCleanSearch() !== "") {
      api.searchItems(this.getCleanSearch()).then(response => {
        this.setState({
          categories: response.categories || [],
          items: response.items || [],
          isReady: true
        });
      })
    }
  }

  getCleanSearch() {
    return qs.parse(this.props.search, { ignoreQueryPrefix: true }).search;
  }

  goToItem(item) {
    this.props.history.push('/items/' + item.id);
    this.setState({ selectedItem: item })
  }

  renderItemList() {
    if (! this.state.isReady) return (<Loader />);

    if (! this.state.items.length) return (<NoData />);

    return this.state.items.map((item, key) => {
      return (
          <div key={key} className="d-flex item-content">
            <div className="thumbnail" onClick={() => this.goToItem(item)}>
              <img src={item.picture} alt="The item" />
            </div>
            <div className="info">
              <div className="d-inline-flex">
                <h3>$ {item.price.amount}</h3>
                {item.free_shipping && <img src={shippingIcon} className="shipping-icon" alt="Free Shipping" />}
              </div>
              <p onClick={() => this.goToItem(item)}>{item.title}</p>
            </div>
          </div>
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
                <Row>
                  <Col md="12" className="item-list">
                    { this.renderItemList() }
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </React.Fragment>
    );
  }
}

export default ItemList;