import React, { Component } from "react";
import { Card, Col, Row} from 'reactstrap';
import qs from "qs";
import api from '../utils/api/api_items';
import Breadcrumb from './base/breadcrumbs';
import Loader from './base/loader';
import NoData from './base/no-data';
import shippingIcon from '../assets/img/ic_shipping.png';
import { formatAsCurrency } from "../utils/helpers";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  state = {
    items: [],
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

  jumpToItem(item) {
    this.props.history.push({
      pathname: '/items/' + item.id,
      state: {
        categories: this.state.categories,
        search: this.props.search,
      }
    });
  }

  renderItemList() {
    if (! this.state.isReady) return (<Loader />);

    if (! this.state.items.length) return (<NoData />);

    return this.state.items.map((item, key) => {
      return (
          <div key={key} className="d-flex item-content">
            <div className="thumbnail" onClick={() => this.jumpToItem(item)}>
              <img src={item.picture} alt="The item" />
            </div>
            <div className="info">
              <div className="d-inline-flex">
                <h3>$ { formatAsCurrency(item.price.amount) }</h3>
                {item.free_shipping && <img src={shippingIcon}
                                            className="shipping-icon"
                                            title="Envío gratis a todo el país"
                                            alt="Free Shipping" />}
              </div>
              <p onClick={() => this.jumpToItem(item)}>{item.title}</p>
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