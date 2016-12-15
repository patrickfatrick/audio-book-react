import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const styles = {
  whitespace: {
    paddingLeft: '0.1rem',
    paddingRight: '0.2rem'
  },
  line: {
    '&.active': {
      backgroundColor: '#FFCC66'
    },
    '&.formatted': {
      fontStyle: 'italic',
      marginTop: '1rem'
    }
  }
}

class Line extends React.Component {
  constructor (props) {
    super(props)
    this.mixins = [PureRenderMixin]
  }

  render () {
    const classes = this.props.sheet.classes
    return (
      <span
        className={classNames({
          'line-container': true,
          active: this.props.line.active
        })}>
        <a
          className={classNames(classes.line, {
            active: (this.props.line.active && this.props.audioOn),
            formatted: this.props.line.lineType === 'formatted'
          })}
          onClick={() => this.props.lineHandler(this.props.player, this.props.line.timestampStart)}>
          {(this.props.line.content.includes('\n'))
            ? this.props.line.content.split('\n').map((piece, i) => {
              return (
                <span key={i}>{piece}<br /></span>
              )
            })
            : this.props.line.content
          }
        </a>
        <span
          className={classes.whitespace}
        />
      </span>
    )
  }
}

Line.propTypes = {
  audioOn: PropTypes.bool.isRequired,
  line: PropTypes.object.isRequired,
  lineHandler: PropTypes.func.isRequired
}

export default injectSheet(styles)(Line)
