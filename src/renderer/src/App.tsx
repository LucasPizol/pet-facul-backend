import { HashRouter } from 'react-router-dom'
import { Routes } from './routes'
import { SessionProvider } from './context/session/useSession'
import { ConfigProvider } from 'antd'
function App(): JSX.Element {
  return (
    <SessionProvider>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: 'var(--secondary-color)',
              colorPrimaryBg: 'var(--secondary-color)',
              colorPrimaryHover: '#BCA213',
              colorPrimaryActive: '#BCA213',
              colorTextLightSolid: '#000000',
              colorBgContainer: 'transparent',
              colorBorder: '#BCA213',
            },
          },
        }}
      >
        <HashRouter>
          <Routes />
        </HashRouter>
      </ConfigProvider>
    </SessionProvider>
  )
}

export default App
