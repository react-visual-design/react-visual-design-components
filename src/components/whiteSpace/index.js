import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import propSchema from './config/schema.json'
import defaultData from './config/data.json'
import './index.less'

export default class NewWhiteSpace extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: defaultData,
  }

  static compAttr = {
    name: 'WhiteSpace',
    id: 'WhiteSpace',
    title: '留白',
    iconName: 'StarOutlined',
  }

  static propSchema = propSchema

  render() {
    const { data } = this.props
    return (
      <div className="visual-design-white-space">
        <div style={{ backgroundColor: data.backgroundColor }} className={data.size} />
      </div>
    )
  }
}
