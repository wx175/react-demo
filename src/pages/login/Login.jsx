import { Card, Form, Input, Button, Checkbox, message } from 'antd'
import axios from 'axios'
import React from 'react'
import logo from '@/assets/1.png'
import style from './login.less'
import { setToken } from '../../store/actions/token_action'
import { login } from '../../network/login'
import { useNavigate } from 'react-router-dom'
// const qs = require('qs')
import { connect } from 'react-redux'
import { stringify } from 'qs'

export default connect(
  (state) => ({
    token: state.token,
  }),
  { setToken }
)(Login)

function Login({ setToken }) {
  const navigate = useNavigate()
  const onFinish = async (values) => {
    message.success('登录成功')
    setToken(JSON.stringify(values))
    navigate('/layout', { replace: true })
    // try {
    //   const data = {
    //     mobile: 13314541211,
    //     code: 246810,
    //   }
    //   const res = await axios.post(
    //     'http://geek.itheima.net/v1_0/authorizations',
    //     data,
    //     {
    //       // headers: {
    //       //   'Content-Type': 'application.json;charset=UTF-8',
    //       // },
    //     }
    //   )
    //   console.log(res)
    // } catch (e) {
    //   console.log(e)
    // }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className={style.row}>
      <Card className={style.card} style={{ width: 500 }}>
        <img src={logo} alt="hapi" />
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          validateTrigger={['onBlur', 'onChange']}
          className={style.form}
          autoComplete="no">
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: '请输入手机号' },
              // {
              //   pattern: /^1[3|4|5|8][0-9]\d{4,8}$/,
              //   message: '手机号码格式不对',
              //   validateTrigger: 'onBlur',
              // },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: '请输入密码' },
              { min: 6, message: '至少输入6位密码', validateTrigger: 'onBlur' },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 5, span: 19 }}>
            <Checkbox>我已阅读 用户协议</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 5, span: 19 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
