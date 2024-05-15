import { usePageLayout } from './model'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Layout, Menu, Row, Typography } from 'antd'

const { Content, Sider } = Layout

export const PageLayoutView = ({
  path,
  children,
  user,
  logout
}: ReturnType<typeof usePageLayout>) => {
  return (
    <Layout
      className="layout"
      style={{
        height: '100vh'
      }}
    >
      <Sider
        style={{
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          justifyContent: 'flex-start'
        }}
      >
        <Row
          style={{
            width: '100%',
            gap: 8,
            alignItems: 'center',
            padding: 12,
            height: '10%'
          }}
        >
          <Avatar
            icon={
              <UserOutlined
                style={{
                  color: '#fff'
                }}
              />
            }
            style={{
              background: 'var(--primary-color)',
              border: '1px solid #fff'
            }}
          />
          {user?.name && (
            <Typography.Text
              style={{
                color: '#fff',
                fontFamily: 'Montserrat',
                fontWeight: 'bold'
              }}
            >
              {user.name}
            </Typography.Text>
          )}
        </Row>

        <Row
          style={{
            height: '83%'
          }}
        >
          <Menu
            theme="dark"
            style={{
              padding: 0,
              margin: 0,
              width: '100%',
              height: '100%'
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
        </Row>
        <Row
          style={{
            padding: 12,
            height: '7%',
            width: '100%'
          }}
        >
          <Button
            type="primary"
            danger
            onClick={logout}
            style={{
              width: '100%'
            }}
          >
            Sair
          </Button>
        </Row>
      </Sider>
      <Layout
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        <Content
          style={{
            margin: '24px 16px 0',
            maxHeight: '800px',
            paddingTop: 20,
            paddingBottom: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
