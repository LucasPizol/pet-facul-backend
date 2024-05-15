import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom'
import { LoginPage } from './pages/login'
import { useMemo } from 'react'
import { useSession } from './context/session/useSession'
import { PageLayout } from './components/layout'
import { DonationPage } from './pages/donation'
import { Col } from 'antd'
import Lottie from 'react-lottie'
import dogLoading from '@renderer/assets/lotties/dog_loading.json'

export const Routes = () => {
  const { user, pageLoading } = useSession()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: dogLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  if (pageLoading)
    return (
      <Col
        span={24}
        style={{
          display: 'grid',
          placeItems: 'center',
          height: '100vh',
          background: 'var(--primary-color)'
        }}
      >
        <Col
          style={{
            padding: 20,
            background: '#fff',
            borderRadius: '50%',
            width: 400,
            height: 400,
            display: 'grid',
            placeItems: 'center'
          }}
        >
          <Lottie options={defaultOptions} height={300} width={300} />
        </Col>
      </Col>
    )

  const component = useMemo(() => {
    if (user) {
      return (
        <PageLayout>
          <ReactRoutes>
            <Route path="/donations" element={<DonationPage />} />
            <Route path="*" element={<Navigate to="/donations" />} />
          </ReactRoutes>
        </PageLayout>
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
