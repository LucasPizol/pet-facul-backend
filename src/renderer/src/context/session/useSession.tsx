import { IAddUserModel, IAuthenticateUserModel, IUserModel } from '@renderer/interfaces/user'
import { authenticateUser } from '@renderer/requests/auth/authenticate-user'
import { registerUser } from '@renderer/requests/auth/register-user'
import { verifyUserSession } from '@renderer/requests/auth/verify-user-session'
import { createContext, useContext, useEffect, useState } from 'react'

interface SessionProps {
  user: IUserModel | null
  loading: boolean
  pageProgress: number

  login: (params: IAuthenticateUserModel) => Promise<void>
  register: (params: IAddUserModel) => Promise<void>
  logout: () => void
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
  const [loading, setLoading] = useState<boolean>(false)
  const [pageProgress, setPageProgress] = useState<number>(0)

  useEffect(() => {
    setPageProgress(0)
    verifyUserSession()
      .then((user) => {
        setLoading(false)

        if (!user) {
          setUser(null)
          setPageProgress(0)
          return
        }
        for (let i = 0; i <= 99; i++) {
          setTimeout(() => {
            setPageProgress(i)
            if (i === 99) {
              setPageProgress(100)

              setTimeout(() => {
                setUser(user)
                setPageProgress(0)
              }, 1000)
            }
          }, 10 * i)
        }
      })
      .catch(logout)
      .finally(() => setPageProgress(0))
  }, [])

  const login = async (params: IAuthenticateUserModel) => {
    try {
      setLoading(true)
      const user = await authenticateUser(params)

      for (let i = 0; i < 100; i++) {
        setTimeout(() => {
          setPageProgress(i)
          if (i === 99) {
            setPageProgress(100)

            setTimeout(() => {
              setUser(user)
              setPageProgress(0)
              localStorage.setItem('@animals:token', user.token)
            }, 1000)
          }
        }, 10 * i)
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  const register = async (params: IAddUserModel) => {
    try {
      setLoading(true)
      const user = await registerUser(params)
      setUser(user)
      localStorage.setItem('@animals:token', user.token)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      throw error
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('@animals:token')
  }

  return (
    <SessionContext.Provider value={{ login, user, register, loading, pageProgress, logout }}>
      <>{children}</>
    </SessionContext.Provider>
  )
}
