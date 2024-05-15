import { api } from '@renderer/api/api'
import { IUserModel } from '@renderer/interfaces/user'

export const verifyUserSession = async (): Promise<IUserModel> => {
  return api
    .get('/user')
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}
