import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import propSchema from './config/schema.json'
import './index.less'
import { defaultImg } from '../../util/img'
import defaultData from './config/data.json'

export default class ImageArea extends Component {
  static propTypes = {
    data: PropTypes.object,
    imgSrc: PropTypes.string,
    imgWidth: PropTypes.string,
    imgHeight: PropTypes.string,
  }

  static defaultProps = {
    data: defaultData,
    imgSrc: '',
    imgWidth: '100%',
    imgHeight: '100%',
  }

  static compAttr = {
    name: 'ImageArea',
    id: 'ImageArea',
    title: '热力图',
    iconName: 'PictureOutlined',
  }

  static propSchema = propSchema

  imgmapName = v4()

  render() {
    const { imgWidth, imgHeight } = this.props
    const {
      data: { src, coordinates },
    } = this.props
    return (
      <div className="visual-design-img-area-container">
        <img
          className="img"
          src={src || defaultImg}
          width={imgWidth}
          height={imgHeight}
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
      </div>
    )
  }
}
