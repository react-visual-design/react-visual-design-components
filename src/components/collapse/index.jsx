import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'antd-mobile'
import propSchema from './config/schema.json'
import defaultData from './config/data.json'
import './index.less'

export default class NewCollapse extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: defaultData,
  }

  static compAttr = {
    name: 'Collapse',
    id: 'collapse',
    title: '折叠面板',
    iconName: 'OrderedListOutlined',
  }

  static propSchema = propSchema

  render() {
    const { array } = this.props.data
    return (
      <div className="visual-design-collapse">
        <Collapse>
          {array.map(({ title, content }, i) => (
            <Collapse.Panel key={i} title={title}>
              {content}
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>
    )
  }
}
