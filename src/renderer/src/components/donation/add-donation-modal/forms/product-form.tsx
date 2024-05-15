import { Form, FormInstance } from 'antd'
import { ProductField } from '../fields/product'
import { UnitField } from '../fields/unit'
import { ValueField } from '../fields/valor'
import { IDonationModel } from '@renderer/interfaces/donation'

interface ProductFormProps {
  data: IDonationModel[]
  form: FormInstance
}
export const ProductForm = ({ data, form }: ProductFormProps) => {
  return (
    <Form layout="vertical" form={form}>
      <ProductField data={data} form={form} />
      <UnitField data={data} form={form} />
      <ValueField unit={form.getFieldValue('unit')} />
    </Form>
  )
}
