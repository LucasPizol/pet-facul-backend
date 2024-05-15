import { IDonationModel } from '@renderer/interfaces/donation'
import { loadDonation } from '@renderer/requests/donation/load-donation'
import { useEffect, useState } from 'react'

export const useDonationModel = () => {
  const [donations, setDonations] = useState<IDonationModel[]>([])

  useEffect(() => {
    loadDonation().then(setDonations)
  }, [])

  return {
    donations
  }
}
