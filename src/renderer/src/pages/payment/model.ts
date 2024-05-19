import { IPaymentModel } from '@renderer/interfaces/payment'
import { loadPayment } from '@renderer/requests/payment/load-payment'
import { updatePayment } from '@renderer/requests/payment/update-payment'
import { message } from 'antd'
import { useEffect, useState } from 'react'

export const usePaymentsModel = () => {
  const [payments, setPayments] = useState<IPaymentModel[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [openPaidModal, setOpenPaidModal] = useState<boolean>(false)
  const [selectedId, setSelectedId] = useState<string>()
  const [messageApi, contextHolder] = message.useMessage()

  const fetchData = async () => {
    loadPayment().then(setPayments)
  }

  const deletePayment = async (id: string) => {
    try {
      await updatePayment(id, {
        hasDeleted: true
      })
      await fetchData()
      messageApi.success('Pagamento excluido com sucesso!')
    } catch (error) {
      messageApi.error('Falha ao excluir pagamento')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    payments: payments.sort((a, b) => {
      const [year, month, day] = a.deadline.split('T')[0].split('-')
      const [yearB, monthB, dayB] = b.deadline.split('T')[0].split('-')

      return (
        Math.round(
          (new Date().getTime() - new Date(Number(yearB), Number(monthB), Number(dayB)).getTime()) /
            (1000 * 60 * 60 * 24) -
            1
        ) -
        Math.round(
          (new Date().getTime() - new Date(Number(year), Number(month), Number(day)).getTime()) /
            (1000 * 60 * 60 * 24) -
            1
        )
      )
    }),
    openModal,
    openPaidModal,
    setOpenPaidModal,
    setOpenModal,
    fetchData,
    setSelectedId,
    selectedId,
    deletePayment,
    contextHolder
  }
}
