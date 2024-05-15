import { api } from '@renderer/api/api'
import { IAddUserModel, IUserModel } from '@renderer/interfaces/user'

export const registerUser = async (
  params: IAddUserModel
): Promise<IUserModel | null> => {
  const { username, password, name } = params
  return api
    .post('/user/register', { username, password, name })
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}
