import React, { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([GridComponent, BarChart, CanvasRenderer])

export default function Echart({ option }) {
  const echart = useRef(null)
  const init = () => {
    echarts.init(echart.current).setOption(option)
    // 暂时无法解决 echarts 重复挂载的方法
    // echarts.getInstanceByDom(echart.current)
  }
  useEffect(() => {
    if (JSON.stringify(option) !== '{}') init()
  }, [option])

  return <div style={{ width: '100%', height: '100%' }} ref={echart}></div>
}
