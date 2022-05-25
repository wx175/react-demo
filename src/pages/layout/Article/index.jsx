import React, { useEffect, useState } from 'react'
import {
  Card,
  Form,
  Breadcrumb,
  Radio,
  Select,
  Button,
  Tag,
  DatePicker,
  Space,
  Table,
} from 'antd'
import { Link, useNavigate } from 'react-router-dom'

import 'moment/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { data } from 'browserslist'

const { RangePicker } = DatePicker
const { Option } = Select

export default function Article() {
  // 文章列表管理 统一管理数据 将来修改给setArticleData传对象
  const [articleData, setArticleData] = useState({
    list: [
      {
        id: 0,
        title: '标题',
        status: 1,
        pubdate: '发布时间',
        read_count: '阅读数',
        comment_count: '评论数',
        like_count: '点赞数',
      },
    ], // 文章列表
    count: 0, // 文章数量
  })

  // // 文章参数管理
  const [params, setParams] = useState({
    page: 1,
    per_page: 10,
  })

  // 获取文章列表
  useEffect(() => {
    // 发送请求 将副作用相关的函数定义在副作用中 可以提升性能
    const loadList = async () => {
      setTimeout(() => {
        setArticleData({
          list: [
            {
              id: 0,
              title: '测试文章',
              status: 2,
              pubdate: '2022.3.5',
              read_count: '1',
              comment_count: '1',
              like_count: '1',
            },
          ],
          count: 1,
        })
      }, 500)
    }
    loadList()
  }, [params])

  /* 表单筛选功能实现 */
  const onFinish = (values) => {
    const _params = {}
    const { channel_id, date, status } = values
    if (channel_id) _params.channel_id = channel_id
    if (status) _params.status = status
    if (date) {
      _params.begin_pubdate = date[0]
      _params.end_pubdate = date[1]
    }
    // 修改params 触发请求 与 页面更新
    setParams(...params, ..._params)
  }
  // 翻页实现
  const pageChange = (page) => {
    setParams({
      ...params,
      page,
    })
  }

  const formatStatus = (type) => {
    const TYPES = {
      1: <Tag color="red">审核失败</Tag>,
      2: <Tag color="green">审核成功</Tag>,
    }
    return TYPES[type]
  }

  // 删除文章
  const delArticle = async (data) => {
    // 发送请求删除文章
    // // 刷新一下列表
    setParams()
    console.log(data)
  }

  // 编辑文章
  const navigate = useNavigate()
  const goPublish = (data) => {
    navigate(`../publish?id=${data.id}`)
  }

  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      key: 'id',
      width: 120,
      render: (cover) => {
        return (
          <img src={require('@/assets/1.png')} width={80} height={60} alt="" />
        )
      },
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'id',
      width: 220,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'id',
      render: (data) => formatStatus(data),
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate',
      key: 'id',
    },
    {
      title: '阅读数',
      dataIndex: 'read_count',
      key: 'id',
    },
    {
      title: '评论数',
      dataIndex: 'comment_count',
      key: 'id',
    },
    {
      title: '点赞数',
      dataIndex: 'like_count',
      key: 'id',
    },
    {
      title: '操作',
      key: 'id',
      render: (data) => {
        return (
          <Space size="middle">
            <Button
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => goPublish(data)}
            />
            <Button
              type="primary"
              danger
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => delArticle(data)}
            />
          </Space>
        )
      },
      fixed: 'right',
    },
  ]

  return (
    <div>
      {/* 筛选区域 */}
      <Card
        title={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="/home">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>内容管理</Breadcrumb.Item>
          </Breadcrumb>
        }
        style={{ marginBottom: 20 }}>
        <Form onFinish={onFinish} initialValues={{ status: undefined }}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={undefined}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={1}>待审核</Radio>
              <Radio value={2}>审核通过</Radio>
              <Radio value={3}>审核失败</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="channel_id">
            <Select placeholder="请选择文章频道" style={{ width: 120 }}>
              <Option key={1} value={'Ch'}>
                {'中文'}
              </Option>
              <Option key={2} value={'Eg'}>
                {'英文'}
              </Option>
            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            {/* 传入locale属性 控制中文显示*/}
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 80 }}>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {/* 文章列表区域 */}
      <Card title={`根据筛选条件共查询到 ${articleData.count} 条结果：`}>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={articleData.list}
          pagination={{
            pageSize: params.per_page,
            total: articleData.count,
            onChange: pageChange,
            current: params.page,
          }}
          bordered
        />
      </Card>
    </div>
  )
}
