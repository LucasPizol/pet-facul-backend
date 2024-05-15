import { IAddDonationModel, IDonationModel } from '@renderer/interfaces/donation'
import { Form, Modal, Steps, message } from 'antd'
import { Dispatch, useMemo, useState } from 'react'
import { ProductForm } from './forms/product-form'
import { IAddCustomerModel } from '@renderer/interfaces/customer'
import { CustomerForm } from '@renderer/components/customer/add-customer-modal/forms/customer-form'
import { addDonation } from '@renderer/requests/donation/add-donation'

interface AddDonationModalProps {
  open: boolean
  setOpen: Dispatch<boolean>
  data: IDonationModel[]
  fetchData: () => Promise<void>
}

export const AddDonationModal = ({ open, setOpen, data, fetchData }: AddDonationModalProps) => {
  const [form] = Form.useForm()
  const [customerForm] = Form.useForm()
  const [stepNumber, setStepNumber] = useState<number>(0)

  const [messageApi, contextHolder] = message.useMessage()

  const [donationFields, setDonationFields] = useState<IAddDonationModel>()

  const steps = useMemo(() => {
    if (stepNumber === 0) {
      return <ProductForm data={data} form={form} />
    }
    if (stepNumber === 1) {
      return <CustomerForm form={customerForm} />
    }

    return <></>
  }, [stepNumber, data])

  const nextStep = () => {
    if (stepNumber === 0) {
      form.validateFields().then((values: IAddDonationModel) => {
        setDonationFields(values)
        setStepNumber(stepNumber + 1)
      })
      return
    }
    if (stepNumber === 1) {
      customerForm.validateFields().then(async (values: IAddCustomerModel) => {
        try {
          if (!donationFields) return
          await addDonation({
            ...donationFields,
            ...values
          })
          messageApi.success('Doação adicionada com sucesso!')
          await fetchData()
          form.resetFields()
          customerForm.resetFields()
          setDonationFields(undefined)
          setStepNumber(0)
          setOpen(false)
        } catch (error) {
          messageApi.error('Erro ao adicionar doação!')
        }
      })
    }
  }

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      title="Adicionar doação"
      okText={stepNumber === 0 ? 'Proximo' : 'Confirmar'}
      onOk={nextStep}
    >
      {contextHolder}
      <Steps
        current={stepNumber}
        items={[
          {
            title: 'Doação'
          },

          {
            title: 'Doador'
          }
        ]}
      />
      {steps}
    </Modal>
  )
}
