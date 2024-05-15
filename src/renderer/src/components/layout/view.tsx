import { usePageLayout } from './model'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Layout, Menu } from 'antd'

const { Content, Sider } = Layout

export const PageLayoutView = ({ path, children }: ReturnType<typeof usePageLayout>) => {
  return (
    <Layout
      className="layout"
      style={{
        height: '100vh'
      }}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          padding: 0
        }}
      >
        <Avatar />
        <Menu
          theme="dark"
          style={{
            padding: 0,
            margin: 0
          }}
          mode="inline"
          selectedKeys={[path]}
          items={[
            {
              key: '/donations',
              icon: <UserOutlined />,
              label: 'Doações'
            }
          ]}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>{children}</Content>
      </Layout>
    </Layout>
  )
}
