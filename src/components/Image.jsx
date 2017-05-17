/* globals window document */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { isMediumScreen } from '../lib/utils'

const styles = {
  imageContainer: {
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
  },
};

class Image extends Component {
  static propTypes = {
    image: PropTypes.shape({
      type: PropTypes.string,
      src: PropTypes.string,
      thumb: PropTypes.string,
    }).isRequired,
    imagesLocation: PropTypes.string.isRequired,
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.image.src = this.props.imagesLocation + this.props.image.src;
    }, 1000);
  }

  render() {
    const {
      image,
      imagesLocation,
      sheet: { classes }, // eslint-disable-line react/prop-types
    } = this.props;

    return (
      <div className={classes.imageContainer}>
        <img
          alt={image.src}
          className={classes.image}
          style={(isMediumScreen())
            ? {
              minWidth: document.body.clientWidth,
              minHeight: image.dimensions[1] / (image.dimensions[0] / document.body.clientWidth)
            }
            : {
              minWidth: image.dimensions[0],
              minHeight: image.dimensions[1]
            }
          }
          {...(image.src && { src: imagesLocation + image.thumb })}
          ref={(node) => {
            this.image = node;
          }}
        />
      </div>
    );
  }
}

export default injectSheet(styles)(Image);
