import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { NoticeBar } from 'antd-mobile'

import propSchema from './config/schema.json'
import defaultData from './config/data.json'

export default class NewNoticeBar extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: defaultData,
  }

  static compAttr = {
    name: 'NoticeBar',
    id: 'NoticeBar',
    title: '通知栏',
    iconName: 'StarOutlined',
  }

  static propSchema = propSchema

  state = {
    visible: true,
  }

  closeNoTice = () => {
    this.setState({ visible: false })
  }

  render() {
    const { data } = this.props
    const { visible } = this.state
    return visible ? (
      <NoticeBar
        mode="closable"
        delay={0}
        closeable
        onClose={this.closeNoTice}
        content={data.content}
      />
    ) : null
  }
}
