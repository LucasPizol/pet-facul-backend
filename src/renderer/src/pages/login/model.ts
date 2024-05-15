import { useSession } from '@renderer/context/session/useSession'
import { IAuthenticateUserModel } from '@renderer/interfaces/user'
import { Form, message } from 'antd'

export const useLoginModel = () => {
  const { user, login, loading } = useSession()
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()

  const submitInfo = async (values: IAuthenticateUserModel & { remember: boolean }) => {
    const { password, remember, username } = values

    try {
      await login(values)
      
      if (remember) {
        localStorage.setItem('@animal:credentials', JSON.stringify({ username, password }))
      }

      messageApi.success('Login efetuado com sucesso!')
    } catch (error) {
      messageApi.error('Usuário ou senha inválidos!')
    }
  }

  return { user, loading, form, submitInfo, contextHolder }
}
