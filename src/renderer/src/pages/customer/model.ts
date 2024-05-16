import { ICustomerModel } from '@renderer/interfaces/customer'
import { loadCustomer } from '@renderer/requests/customer/load-customers'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useCustomerModel = () => {
  const [customers, setCustomers] = useState<ICustomerModel[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)

  const location = useLocation()

  const [customerId, setCustomerId] = useState<string | undefined>(
    location.search.replace('?id=', '')
  )

  const fetchData = async () => {
    try {
      const response = await loadCustomer()

      if (response) {
        setCustomers(response)
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    customers,
    openModal,
    setOpenModal,
    fetchData,
    customerId,
    setCustomerId
  }
}
