import { IAddUserModel, IAuthenticateUserModel, IUserModel } from '@renderer/interfaces/user'
import { authenticateUser } from '@renderer/requests/auth/authenticate-user'
import { registerUser } from '@renderer/requests/auth/register-user'
import { createContext, useContext, useState } from 'react'
import { message } from 'antd'

interface SessionProps {
  user: IUserModel | null
  loading: boolean

  login: (params: IAuthenticateUserModel) => Promise<void>
  register: (params: IAddUserModel) => Promise<void>
}

const SessionContext = createContext<SessionProps>(null as any)
export const useSession = () => {
  const context = useContext(SessionContext)

  if (!context) {
    throw new Error('useSession must be used within a SessionProvider')
  }

  return context
}

export const SessionProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUserModel | null>(null)
  const [loading, setLoading] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()

  const login = async (params: IAuthenticateUserModel) => {
    try {
      setLoading(true)
      const user = await authenticateUser(params)
      setUser(user)
      sessionStorage.setItem('token', user.token)
      messageApi.success('Login realizado com sucesso!')
    } catch (error) {
      messageApi.error('Usuário ou senha inválidos!')
    }
    setLoading(false)
  }

  const register = async (params: IAddUserModel) => {
    try {
      setLoading(true)
      const user = await registerUser(params)
      setUser(user)
      messageApi.success('Usuário criado com sucesso!')
    } catch (error) {
      messageApi.error('Erro ao criar usuário!')
    }
    setLoading(false)
  }

  return (
    <SessionContext.Provider value={{ login, user, register, loading }}>
      <>
        {contextHolder}
        {children}
      </>
    </SessionContext.Provider>
  )
}
