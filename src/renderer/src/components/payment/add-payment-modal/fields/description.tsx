import { Form, Input } from 'antd'

export const DescriptionField = () => {
  return (
    <Form.Item
      name="description"
      label="Descrição"
      rules={[{ required: true, message: 'Por favor, informe a descrição!' }]}
    >
      <Input />
    </Form.Item>
  )
}
