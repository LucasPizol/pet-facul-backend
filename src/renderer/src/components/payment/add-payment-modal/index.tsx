import { IAddPaymentModel } from '@renderer/interfaces/payment'
import { addPayment } from '@renderer/requests/payment/add-payment'
import { Form, Modal, message } from 'antd'
import { Dispatch } from 'react'
import { PaymentForm } from './forms/payment-form'

interface AddDonationModalProps {
  open: boolean
  setOpen: Dispatch<boolean>
  fetchData: () => Promise<void>
}

export const AddPaymentModal = ({ open, setOpen, fetchData }: AddDonationModalProps) => {
  const [form] = Form.useForm()

  const [messageApi, contextHolder] = message.useMessage()

  const handleSubmit = async (values: IAddPaymentModel) => {
    try {
      const deadline = new Date(values.deadline)

      await addPayment({
        ...values,
        deadline: new Date(deadline.getFullYear(), deadline.getMonth(), deadline.getDate())
      })
      messageApi.success('Conta adicionado com sucesso!')
      await fetchData()
      form.resetFields()
      setOpen(false)
    } catch (error) {
      messageApi.error('Erro ao adicionar conta!')
    }
  }

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      onOk={form.submit}
      title="Adicionar Conta"
      okText="Confirmar"
    >
      {contextHolder}
      <PaymentForm form={form} onSubmit={handleSubmit} />
    </Modal>
  )
}
