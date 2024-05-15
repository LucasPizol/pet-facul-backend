import { api } from '@renderer/api/api'
import { IAuthenticateUserModel, IUserModel } from '@renderer/interfaces/user'

export const authenticateUser = async (
  params: IAuthenticateUserModel
): Promise<IUserModel & {token: string}> => {
  const { username, password } = params
  return api
    .post('/user/login', { username, password })
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}
