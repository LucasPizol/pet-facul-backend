import dogLoading from '@renderer/assets/lotties/dog_loading.json'
import { Col, Progress } from 'antd'
import { useMemo } from 'react'
import Lottie from 'react-lottie'
import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom'
import { PageLayout } from './components/layout'
import { useSession } from './context/session/useSession'
import { CustomerPage } from './pages/customer'
import { DonationPage } from './pages/donation'
import { LoginPage } from './pages/login'
import { PaymentPage } from './pages/payment'

export const Routes = () => {
  const { user, pageProgress } = useSession()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: dogLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  if (pageProgress !== 0)
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
          <Progress
            percent={pageProgress}
            style={{
              maxWidth: 150
            }}
          />
        </Col>
      </Col>
    )

  const component = useMemo(() => {
    if (user) {
      return (
        <PageLayout>
          <ReactRoutes>
            <Route path="/donations" element={<DonationPage />} />
            <Route path="/customers" element={<CustomerPage />} />
            <Route path="/payments" element={<PaymentPage />} />
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
