import { Form, Input } from 'antd'

export const PasswordField = () => {
  return (
    <Form.Item
      label="Senha"
      name="password"
      rules={[
        { required: true, message: 'Por favor, informe sua senha!' },
        {
          min: 6,
          message: 'A senha deve ter pelo menos 6 caracteres!'
        }
      ]}
    >
      <Input.Password />
    </Form.Item>
  )
}
