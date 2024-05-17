import { DatePicker, Form } from 'antd'

export const DeadlineField = () => {
  return (
    <Form.Item name="deadline" label="Data de vencimento">
      <DatePicker />
    </Form.Item>
  )
}
