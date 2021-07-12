import React, { createRef, Component } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import Area from './area'
import './index.less'
import placeHolderImg from '../../../public/placeholder-1.png'
import defaultData from './config/data.json'
let pointStart = { x: null, y: null }
let currentId = null

export default class ImageArea extends Component {
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: defaultData,
  }

  static compAttr = {
    name: 'ImageArea',
    id: 'ImageArea',
    title: '热点图',
    iconName: 'PictureOutlined',
  }

  imgContainerRef = createRef(null)
  imgRef = createRef(null)
  imgmapName = uuidv4()
  getCursorPosition = e => {
    const { left, top } = this.imgContainerRef.current.getBoundingClientRect()
    return {
      x: e.clientX - left,
      y: e.clientY - top,
    }
  }

  onMouseDown = e => {
    if (e.target === this.imgRef.current || e.target === this.imgContainerRef.current) {
      const { x, y } = this.getCursorPosition(e)
      pointStart = { x, y }
      currentId = uuidv4()
    } else {
      pointStart = { x: null, y: null }
      currentId = null
    }
  }

  onMouseMove = e => {
    const { updateCoordinate } = this.props
    if (pointStart.x && pointStart.y) {
      const pointEnd = this.getCursorPosition(e)
      const newCoordinate = {
        x: Math.min(pointStart.x, pointEnd.x),
        y: Math.min(pointStart.y, pointEnd.y),
        width: Math.abs(pointStart.x - pointEnd.x),
        height: Math.abs(pointStart.y - pointEnd.y),
        id: currentId,
      }
      updateCoordinate({ type: 'add', coordinate: newCoordinate })
    }
  }

  onMouseUp = () => {
    pointStart = { x: null, y: null }
    currentId = null
  }

  render() {
    const { src, width = '100%', height = '100%', coordinates, updateCoordinate } = this.props
    return (
      <div
        className="visual-design-img-area-container"
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}
        ref={this.imgContainerRef}
      >
        <img
          className="img"
          ref={this.imgRef}
          src={src || placeHolderImg}
          width={width}
          height={height}
          alt=""
          draggable={false}
          useMap={`#${this.imgmapName}`}
        />
        <map name={this.imgmapName}>
          {coordinates.map(({ x, y, width, height, id, href }) => (
            <area
              key={id}
              shape="rect"
              coords={`${x},${y},${x + width},${y + height}`}
              href={href}
              target="__blank"
            />
          ))}
        </map>
        {coordinates.map(coordinate => (
          <Area key={coordinate.id} coordinate={coordinate} updateCoordinate={updateCoordinate} />
        ))}
      </div>
    )
  }
}
