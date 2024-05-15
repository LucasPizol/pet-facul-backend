import { api } from '@renderer/api/api'
import { IDonationModel } from '@renderer/interfaces/donation'

export const loadDonation = async (): Promise<IDonationModel[]> => {
  return api
    .get('/donation')
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}
