import { Form, FormInstance } from 'antd'
import { DeadlineField } from '../fields/deadline'
import { DescriptionField } from '../fields/description'
import { TypeField } from '../fields/type'
import { ValueField } from '../fields/value'
interface CustomerFormProps {
  form: FormInstance
  onSubmit?: (values: any) => void
}
export const PaymentForm = ({ form, onSubmit }: CustomerFormProps) => {
  return (
    <Form layout="vertical" form={form} onFinish={onSubmit}>
      <DescriptionField />
      <ValueField unit="R$" />
      <TypeField />
      <DeadlineField />
    </Form>
  )
}
