import { IUpdatePaymentModel } from '@renderer/interfaces/payment'
import { updatePayment } from '@renderer/requests/payment/update-payment'
import { Form, Modal, message } from 'antd'
import { Dispatch } from 'react'
import { PaidAtField } from './fields/paid-at'

interface AddDonationModalProps {
  open: boolean
  setOpen: Dispatch<boolean>
  fetchData: () => Promise<void>
}

export const UpdatePaymentModal = ({ open, setOpen, fetchData }: AddDonationModalProps) => {
  const [form] = Form.useForm()

  const [messageApi, contextHolder] = message.useMessage()

  const handleSubmit = async (values: IUpdatePaymentModel) => {
    try {
      await updatePayment(values)
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
      title="Pagar conta"
      okText="Confirmar"
    >
      {contextHolder}
      <Form form={form} onFinish={handleSubmit}>
        <PaidAtField />
      </Form>
    </Modal>
  )
}
