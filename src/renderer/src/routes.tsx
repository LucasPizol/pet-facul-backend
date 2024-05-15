import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom'
import { LoginPage } from './pages/login'
import { useMemo } from 'react'
import { useSession } from './context/session/useSession'

export const Routes = () => {
  const {user} = useSession()
  const component = useMemo(() => {
    if (user) {
      return <ReactRoutes>
        <Route path="/" element={<div>Home</div>} />
      </ReactRoutes>
    }

    return <ReactRoutes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/login"/>} />
    </ReactRoutes>
  }, [user])

  return component
}
