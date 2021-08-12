import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'antd-mobile'
import './index.less'
import propSchema from './config/schema.json'
import defaultData from './config/data.json'
import { defaultImg } from '../../util/img'

export default class newImage extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: defaultData,
  }

  static compAttr = {
    name: 'Image',
    id: 'Image',
    title: '图片',
    iconName: 'PictureOutlined',
  }

  static propSchema = propSchema

  render() {
    const {
      data: { link, src },
    } = this.props
    return (
      <a className="visual-design-img" href={link}>
        <Image className="img" src={src || defaultImg} fit="fill" />
      </a>
    )
  }
}
