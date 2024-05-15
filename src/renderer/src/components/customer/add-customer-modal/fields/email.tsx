import { Form, Input } from 'antd'

interface EmailFieldProps {
  disabled: boolean
}
export const EmailField = ({ disabled }: EmailFieldProps) => {
  return (
    <Form.Item
      name="email"
      label="Email"
      rules={[{ required: true, message: 'Por favor, informe o e-mail!' }]}
    >
      <Input disabled={disabled} type="email" />
    </Form.Item>
  )
}
