import { loadCustomerByDocument } from '@renderer/requests/customer/load-customer-by-document'
import { Form, FormInstance, Input } from 'antd'

interface DocumentFieldProps {
  form: FormInstance
  disableFields: () => void
  isFieldsDisabled: boolean
}

export const DocumentField = ({ form, disableFields, isFieldsDisabled }: DocumentFieldProps) => {
  const handleDocumentChange = async (value: string) => {
    if (value.length < 11) {
      if (isFieldsDisabled) {
        disableFields()
        form.setFieldsValue({
          document: value,
          name: '',
          email: '',
          phone: ''
        })
      }
      return
    }

    try {
      const customer = await loadCustomerByDocument(value)
      if (!customer) return
      form.setFieldsValue(customer)
      disableFields()
    } catch (error) {}
  }

  return (
    <Form.Item
      name="document"
      label="Documento"
      rules={[{ required: true, message: 'Por favor, informe o documento!' }]}
    >
      <Input onChange={(e) => handleDocumentChange(e.target.value)} />
    </Form.Item>
  )
}
