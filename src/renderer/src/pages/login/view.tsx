import { Button, Checkbox, Col, Form, Row, Typography } from 'antd'
import { useLoginModel } from './model'
import imgLogin from '@renderer/assets/img_login.png'
import { UsernameField } from '@renderer/components/fields/username'
import { PasswordField } from '@renderer/components/fields/password'

export const LoginView = ({
  loading,
  form,
  submitInfo,
  contextHolder
}: ReturnType<typeof useLoginModel>) => {
  const credentials = localStorage.getItem('@animal:credentials')
    ? JSON.parse(localStorage.getItem('@animal:credentials') || '{}')
    : undefined

  return (
    <Row style={{ height: '100vh', overflow: 'hidden' }}>
      {contextHolder}
      <Col span={14} style={{ height: '100%', padding: 0 }}>
        <img
          src={imgLogin}
          alt="logo"
          style={{ height: '100%', objectFit: 'cover', width: '100%' }}
        />
      </Col>
      <Col
        span={10}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--primary-color)',
          width: '100%',
          flexDirection: 'column',
          padding: 24
        }}
      >
        <Typography.Title
          style={{
            textDecoration: 'underline',
            color: '#fff',
            fontSize: 60
          }}
        >
          login
        </Typography.Title>
        <Form
          style={{ width: '100%' }}
          layout="vertical"
          form={form}
          onFinish={(values) => submitInfo(values)}
          className="login-form"
          initialValues={credentials ? { ...credentials, remember: true } : undefined}
        >
          <UsernameField />
          <PasswordField />

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Lembrar-me</Checkbox>
          </Form.Item>

          <Row
            style={{
              gap: 12
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{
                width: '100%'
              }}
            >
              Entrar
            </Button>
            <Button
              type="default"
              htmlType="submit"
              loading={loading}
              style={{
                width: '100%',
                color: '#fff'
              }}
            >
              Cadastrar-se
            </Button>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}
