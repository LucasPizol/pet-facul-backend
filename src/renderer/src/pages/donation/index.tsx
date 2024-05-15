import { useDonationModel } from './model'
import { DonationView } from './view'

export const DonationPage = () => {
  return <DonationView {...useDonationModel()} />
}
