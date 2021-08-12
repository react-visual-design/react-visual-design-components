import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Picker, Button } from 'antd-mobile'

import propSchema from './config/schema.json'
import defaultData from './config/data.json'

export default class NewPicker extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: defaultData,
  }

  static compAttr = {
    name: 'Picker',
    id: 'Picker',
    title: '选择器',
    iconName: 'StarOutlined',
  }

  static propSchema = propSchema

  state = {
    visible: false,
    value: [2],
  }

  render() {
    const { visible, value } = this.state
    return (
      <>
        <Button
          onClick={() => {
            this.setState({ visible: true })
          }}
        >
          选择
        </Button>
        <Picker
          visible={visible}
          columns={[
            [
              { value: 1, label: '陕西' },
              { value: 2, label: '山西' },
            ],
          ]}
          value={value}
          onClose={() => {
            this.setState({ visible: false })
          }}
          onConfirm={checkedValue => {
            this.setState({ value: checkedValue })
          }}
        />
      </>
    )
  }
}
