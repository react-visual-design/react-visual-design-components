import React, { createRef, Component } from 'react'
import { Icon } from 'antd-mobile'

import PropTypes from 'prop-types'
import { isEqual } from 'lodash'
import interact from 'interactjs'
// import { DeleteIcon, NumberIcon } from './Icons'

const getAreaStyle = coordinate => {
  const { x, y, width, height } = coordinate
  return {
    position: 'absolute',
    width,
    height,
    top: y,
    left: x,
    background: '#dedede',
    opacity: 0.6,
  }
}

export default class Area extends Component {
  areaRef = createRef(null)
  componentDidMount() {
    interact(this.areaRef.current)
      .draggable({})
      .resizable({
        edges: {
          left: true,
          right: true,
          bottom: true,
          top: true,
        },
      })
      .on('dragmove', this.onDragMove)
      .on('resizemove', this.onResizeMove)
  }
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props.coordinate, nextProps.coordinate)
  }

  onResizeMove = e => {
    const { coordinate, updateCoordinate } = this.props
    const { x, y } = coordinate
    const { width, height } = e.rect
    const { left, top } = e.deltaRect
    const nextCoordinate = {
      ...coordinate,
      x: x + left,
      y: y + top,
      width,
      height,
    }
    updateCoordinate({ type: 'update', coordinate: nextCoordinate })
  }
  onDragMove = e => {
    const {
      coordinate,
      coordinate: { x, y },
      updateCoordinate,
    } = this.props
    const { dx, dy } = e
    const nextCoordinate = { ...coordinate, x: x + dx, y: y + dy }
    updateCoordinate({ type: 'update', coordinate: nextCoordinate })
  }

  handleDelete = () => {
    const { updateCoordinate, coordinate } = this.props
    updateCoordinate({ type: 'delete', coordinate: coordinate })
  }

  componentWillUnmount() {
    interact(this.areaRef.current).unset()
  }

  render() {
    const { coordinate, index } = this.props
    return (
      <div ref={this.areaRef} style={getAreaStyle(coordinate)}>
        {/* <NumberIcon number={index + 1} /> */}
        <div className="operate-container">
          <Icon className="delete" type="cross" onClick={this.handleDelete} />
        </div>
      </div>
    )
  }
}
