import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom'
import { LoginPage } from './pages/login'
import { useMemo } from 'react'
import { useSession } from './context/session/useSession'
import { PageLayout } from './components/layout'

export const Routes = () => {
  const { user } = useSession()
  const component = useMemo(() => {
    if (user) {
      return (
        <>
          <PageLayout>
            <ReactRoutes>
              <Route path="/donations" />
              <Route path="*" element={<Navigate to="/donations" />} />
            </ReactRoutes>
          </PageLayout>
        </>
      )
    }

    return (
      <ReactRoutes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </ReactRoutes>
    )
  }, [user])

  return component
}
