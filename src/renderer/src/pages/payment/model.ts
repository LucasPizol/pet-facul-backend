import { IPaymentModel } from '@renderer/interfaces/payment'
import { loadPayment } from '@renderer/requests/payment/load-payment'
import { useEffect, useState } from 'react'

export const usePaymentsModel = () => {
  const [payments, setPayments] = useState<IPaymentModel[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [openPaidModal, setOpenPaidModal] = useState<boolean>(false)

  const fetchData = async () => {
    loadPayment().then(setPayments)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    payments,
    openModal,
    openPaidModal,
    setOpenPaidModal,
    setOpenModal,
    fetchData
  }
}
