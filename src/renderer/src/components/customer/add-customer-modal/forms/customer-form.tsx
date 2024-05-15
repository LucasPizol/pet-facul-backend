import { Form, FormInstance } from 'antd'
import { DocumentField } from '../fields/document'
import { NameField } from '../fields/name'
import { EmailField } from '../fields/email'
import { useState } from 'react'
import { PhoneField } from '../fields/phone'
interface CustomerFormProps {
  form: FormInstance
}
export const CustomerForm = ({ form }: CustomerFormProps) => {
  const [disableFields, setDisableFields] = useState<boolean>(false)

  const handleDisableFields = () => {
    setDisableFields(!disableFields)
  }

  return (
    <Form layout="vertical" form={form}>
      <DocumentField disableFields={handleDisableFields} form={form} />
      <NameField disabled={disableFields} />
      <EmailField disabled={disableFields} />
      <PhoneField disabled={disableFields} />
    </Form>
  )
}
