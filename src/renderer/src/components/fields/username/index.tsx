import { Form, Input } from 'antd'

export const UsernameField = () => {
  return (
    <Form.Item
      label="Nome de usuário"
      style={{color:"#fff"}}
      name="username"
      rules={[{ required: true, message: 'Por favor, informe o nome de usuário!' }]}
    >
      <Input />
    </Form.Item>
  )
}
