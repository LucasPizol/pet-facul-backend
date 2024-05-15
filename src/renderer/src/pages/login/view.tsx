import { Button, Col, Form, Row, Typography } from 'antd'
import { useLoginModel } from './model'
import imgLogin from '@renderer/assets/img_login.png'
import { UsernameField } from '@renderer/components/fields/username'
import { PasswordField } from '@renderer/components/fields/password'

export const LoginView = ({ loading, login, form }: ReturnType<typeof useLoginModel>) => {
  return (
    <Row style={{ height: '100vh', overflow: 'hidden' }}>
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
          onFinish={() => form.validateFields().then((values) => login(values))}
          className="login-form"
        >
          <UsernameField />
          <PasswordField />
          <Button type="primary" htmlType="submit" loading={loading} onClick={form.submit}>
            Entrar
          </Button>
        </Form>
      </Col>
    </Row>
  )
}
