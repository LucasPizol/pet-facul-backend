import { IDonationModel } from '@renderer/interfaces/donation'
import { loadDonation } from '@renderer/requests/donation/load-donation'
import { useEffect, useState } from 'react'

export const useDonationModel = () => {
  const [donations, setDonations] = useState<IDonationModel[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)

  const fetchData = async () => {
    loadDonation().then(setDonations)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    donations,
    openModal,
    setOpenModal,
    fetchData
  }
}
