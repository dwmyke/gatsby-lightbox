import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import Modal from 'react-awesome-modal';

const LightboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
`

const PreviewButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
`

export default class Lightbox extends Component {
  static propTypes = {
    sketchbookImages: PropTypes.array.isRequired, // eslint-disable-line
  }

  constructor(props) {
    super(props)

    this.state = {
      showLightbox: false,
      selectedImage: null,
      visible : false,
    }
  }

  render() {
    const { sketchbookImages } = this.props
    const { selectedImage, showLightbox } = this.state
    return (
      <Fragment>
        <LightboxContainer>
          {sketchbookImages.map(image => (
            <PreviewButton
              key={image.node.childImageSharp.fluid.src}
              type="button"
              onClick={() =>
                this.setState({ visible : true, showLightbox: true, selectedImage: image })
              }
            >
              <Img fluid={image.node.childImageSharp.fluid} />
            </PreviewButton>
          ))}
        </LightboxContainer>
        {showLightbox && (
            <Modal 
            visible={this.state.visible}
            width="400"
            effect="fadeInLeft"
            onClickAway={() => this.setState({ visible : false, showLightbox: false })}
        >
            <Img fluid={selectedImage.node.childImageSharp.fluid} />
            <button
              type="button"
              onClick={() => this.setState({ visible : false, showLightbox: false })}
            >
              Close
            </button>
          </Modal>
        )}
      </Fragment>
    )
  }
}