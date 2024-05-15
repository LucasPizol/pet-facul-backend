import { Form, Input } from 'antd'

interface NameFieldProps {
  disabled: boolean
}

export const NameField = ({ disabled }: NameFieldProps) => {
  return (
    <Form.Item
      name="name"
      label="Nome"
      rules={[{ required: true, message: 'Por favor, informe o nome!' }]}
    >
      <Input disabled={disabled} />
    </Form.Item>
  )
}
