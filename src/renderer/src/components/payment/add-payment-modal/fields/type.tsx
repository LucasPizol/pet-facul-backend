import { Form, Select } from 'antd'

const paymentTypes = [
  { type: 'PIX', color: 'blue' },
  { type: 'CRÉDITO', color: 'red' },
  { type: 'DÉBITO', color: 'yellow' },
  { type: 'BOLETO', color: 'purple' },
  { type: 'DINHEIRO', color: 'green' }
]

export const TypeField = () => {
  return (
    <Form.Item
      name="type"
      label="Método de pagamento"
      rules={[{ required: true, message: 'Por favor, informe o método de pagamento!' }]}
    >
      <Select
        options={paymentTypes.map(({ type }) => ({
          label: type,
          value: type
        }))}
      ></Select>
    </Form.Item>
  )
}
