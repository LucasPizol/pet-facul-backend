import { Form, InputNumber } from 'antd'

interface ProductFieldProps {
  unit: string
}

export const ValueField = ({ unit }: ProductFieldProps) => {
  return (
    <Form.Item
      name="value"
      label={unit === 'R$' ? 'Valor' : 'Quantidade'}
      rules={[{ required: true, message: 'Por favor, informe o valor!' }]}
    >
      <InputNumber />
    </Form.Item>
  )
}
