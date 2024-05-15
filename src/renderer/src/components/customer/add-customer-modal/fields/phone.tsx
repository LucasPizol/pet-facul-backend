import { Form, Input } from 'antd'

interface PhoneFieldProps {
  disabled: boolean
}

export const PhoneField = ({ disabled }: PhoneFieldProps) => {
  return (
    <Form.Item
      name="phone"
      label="Telefone"
      rules={[{ required: true, message: 'Por favor, informe o telefone!' }]}
    >
      <Input disabled={disabled} />
    </Form.Item>
  )
}
