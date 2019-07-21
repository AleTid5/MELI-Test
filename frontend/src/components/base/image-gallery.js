import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    renderCarousel = () => this.props.pictures.map((pic, key) => <img src={pic} key={key} alt="You have to buy this"/>);

    render = () => (
        <Carousel centerMode={false}
                  showIndicators={false}
                  showStatus={false}
                  showThumbs={false}>
            {this.renderCarousel()}
        </Carousel>
    );
}