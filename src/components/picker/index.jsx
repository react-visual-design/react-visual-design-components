import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { Picker, List } from 'antd-mobile'

import propSchema from './config/schema.json'
// import defaultData from './config/data.json'

export default class NewNoticeBar extends PureComponent {
  // static propTypes = {
  //   data: PropTypes.object,
  // }

  // static defaultProps = {
  //   data: defaultData,
  // }

  static compAttr = {
    name: 'Picker',
    id: 'Picker',
    title: '选择器',
    iconName: 'StarOutlined',
  }

  static propSchema = propSchema

  render() {
    return (
      <Picker
        data={[
          { value: 1, label: '陕西' },
          { value: 2, label: '山西' },
        ]}
        cols={1}
      >
        <List.Item arrow="horizontal">single</List.Item>
      </Picker>
    )
  }
}
