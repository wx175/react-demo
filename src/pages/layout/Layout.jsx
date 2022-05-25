import React, { Suspense } from 'react'
import { Layout, Menu, message } from 'antd'
import style from './layout.less'
import { HomeOutlined, FileTextOutlined, EditOutlined } from '@ant-design/icons'
import { Outlet } from 'react-router'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeToken } from '../../store/actions/token_action'
const { Header, Sider, Content } = Layout

export default connect(
  (state) => ({
    token: state.token,
  }),
  { removeToken }
)(_Layout)

function _Layout({ removeToken }) {
  const location = useLocation()
  const navigate = useNavigate()
  let { pathname } = location
  const logout = () => {
    removeToken()
    message.success('退出成功')
    navigate('/login')
  }
  function getItem(label, key, icon, items, type) {
    return {
      label,
      key,
      icon,
      items,
      type,
    }
  }
  const items = [
    getItem(
      <NavLink to="home" replace>
        数据预览
      </NavLink>,
      '/layout/home',
      <HomeOutlined />
    ),
    getItem(
      <NavLink to="article" replace>
        内容管理
      </NavLink>,
      '/layout/article',
      <FileTextOutlined />
    ),
    getItem(
      <NavLink to="publish" replace>
        发布文章
      </NavLink>,
      '/layout/publish',
      <EditOutlined />
    ),
  ]
  return (
    <Layout className={style.layout}>
      <Header className={style.header}>
        <div className={style.name}>username</div>
        <div className={style.logout} onClick={logout}>
          退出
        </div>
      </Header>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={pathname}
            selectedKeys={pathname}
            items={items}
          />
        </Sider>
        <Content>
          <Suspense fallback={<h1>....lajiazai</h1>}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}
