import React, { Component } from "react"
import { Row, Col } from 'reactstrap';
import notFoundIcon from '../../assets/img/ic_NotFound.png';

export default class NoData extends Component {
    render = () => (
        <React.Fragment>
            <div className="no-items-found">
                <Row>
                    <Col xs={{size: 2}}>
                        <div className="icon">
                            <img src={notFoundIcon} alt="Not found icon"/>
                        </div>
                    </Col>
                    <Col xs={{size: 10}}>
                        <Col xs={{size: 12}}>
                            <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
                        </Col>
                        <Col xs={{size: 12}}>
                            <ul>
                                <li>Revisá la ortografía de la palabra.</li>
                                <li>Utilizá palabras más genéricas o menos palabras.</li>
                            </ul>
                        </Col>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}