## 热点图

Demo:

```jsx
import React, { Component } from 'react'
import { ImageArea } from 'react-visual-design-components'
import Img from './demo.jpg'

export default class ImageAreaDemo extends Component {
  state = {
    coordinates: [
      {
        x: 178,
        y: 91,
        width: 158,
        height: 132,
        id: 'SJxb6YpuG',
        href: 'https://www.baidu.com/',
      },
      {
        x: 436,
        y: 97,
        width: 170,
        height: 168,
        id: 'SJMZ6YTdf',
        href: 'https://www.baidu.com/',
      },
    ],
  }
  updateCoordinate = ({ type, coordinate }) => {
    let { coordinates } = this.state
    const matchIndex = coordinates.findIndex(item => item.id === coordinate.id)
    if (type === 'delete') {
      coordinates.splice(matchIndex, 1)
    } else if (type === 'add' || type === 'update') {
      if (matchIndex === -1) {
        coordinates = [...coordinates, coordinate]
      } else {
        coordinates[matchIndex] = coordinate
      }
    }
    this.setState({ coordinates: [...coordinates] })
  }
  render() {
    const { coordinates } = this.state
    return <ImageArea coordinates={coordinates} updateCoordinate={this.updateCoordinate} />
  }
}
```
