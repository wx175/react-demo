
import style from './App.less'
import React from 'react'
import {
  useRoutes
} from 'react-router-dom'
import routes from './router'

function App () {
  const element = useRoutes(routes)
  console.log(style)
  console.log(style.app)
  return (
    <div className={style.app}>
      {element}
    </div>
  )
}
export default App
