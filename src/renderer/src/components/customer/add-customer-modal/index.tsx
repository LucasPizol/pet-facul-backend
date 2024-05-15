import { CustomerForm } from '@renderer/components/customer/add-customer-modal/forms/customer-form'
import { IAddCustomerModel } from '@renderer/interfaces/customer'
import { addCustomer } from '@renderer/requests/customer/add-customer'
import { Form, Modal, message } from 'antd'
import { Dispatch } from 'react'

interface AddDonationModalProps {
  open: boolean
  setOpen: Dispatch<boolean>
  fetchData: () => Promise<void>
}

export const AddCustomerModal = ({ open, setOpen, fetchData }: AddDonationModalProps) => {
  const [form] = Form.useForm()

  const [messageApi, contextHolder] = message.useMessage()

  const handleSubmit = async (values: IAddCustomerModel) => {
    try {
      await addCustomer(values)
      messageApi.success('Cliente adicionado com sucesso!')
      await fetchData()
      form.resetFields()
      setOpen(false)
    } catch (error) {
      messageApi.error('Erro ao adicionar cliente!')
    }
  }

  return (
    <Modal open={open} onCancel={() => setOpen(false)} title="Adicionar Tutor" okText="Confirmar">
      {contextHolder}
      <CustomerForm form={form} onSubmit={handleSubmit} />
    </Modal>
  )
}
