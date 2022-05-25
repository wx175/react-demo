import React, { useEffect, useState } from 'react'
import style from './home.less'
import Echart from '@/component/Echart/index.jsx'
export default function Home() {
  const [option, setOption] = useState({})
  const [option1, setOption1] = useState({})

  setTimeout(() => {
    setOption({
      xAxis: {
        type: 'category',
        data: ['123', '456', '789', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
      ],
    })
  }, 2000)
  const init = () => {
    setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
      ],
    })
    setOption1({
      xAxis: {
        type: 'category',
        data: ['123', '456', '789', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
      ],
    })
  }
  useEffect(() => {
    init()
    console.log('我是home中的init')
  }, [])
  // useEffect(() => {}, [option, option1])

  return (
    <div
      id="home"
      style={{
        display: 'flex',
      }}>
      <div
        style={{
          width: '400px',
          height: '400px',
        }}>
        图0
        <Echart option={option}></Echart>
      </div>
      {/* <div
        style={{
          width: '400px',
          height: '400px',
        }}>
        图一
        <Echart option={option1}></Echart>
      </div> */}
    </div>
  )
}
