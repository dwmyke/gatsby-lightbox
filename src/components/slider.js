import Img from 'gatsby-image';
import styled, { keyframes } from 'styled-components';
import React, { Component } from 'react';

export default class BgImageSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.imageSlides,
      currentIndex: 0,
    };
  }

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
    }));
  };

  renderSlides = () => {
    const { images, currentIndex } = this.state;

    const slides = images.map((image, i) => {
      const isActive = currentIndex === i;
      return (
        <div
          css={\`
            transition: opacity 3s ease-in-out;
            height: 100vh;
            width: 100%;
            opacity: ${isActive ? '1' : '0'};
            position: absolute;
            top: 0;
          \`}
        >
          <Img
            fluid={image.asset.fluid}
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              height: '100vh',
            }}
          />
        </div>
      );
    });

    setTimeout(this.goToNextSlide, 10000);

    return slides;
  };

  render() {
    return (
      <div
        className="slider"
        css="
          z-index: -1000;
          height: 100vh;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
        "
      >
        {this.renderSlides()}
      </div>
    );
  }
}
