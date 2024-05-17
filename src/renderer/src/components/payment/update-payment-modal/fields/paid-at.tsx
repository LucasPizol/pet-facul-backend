import { DatePicker, Form } from 'antd'

export const PaidAtField = () => {
  return (
    <Form.Item name="paidAt" label="Data de vencimento">
      <DatePicker />
    </Form.Item>
  )
}
