import { Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import LandingPage from './pages/LandingPage'
import PackageDetailPage from './pages/PackageDetailPage'
import PackageListPage from './pages/PackageListPage'
import PreferencePage from './pages/PreferencePage'
import ResultPage from './pages/ResultPage'
import TicketConfirmPage from './pages/TicketConfirmPage'
import TicketUploadPage from './pages/TicketUploadPage'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="ticket/upload" element={<TicketUploadPage />} />
        <Route path="ticket/confirm" element={<TicketConfirmPage />} />
        <Route path="preferences" element={<PreferencePage />} />
        <Route path="result" element={<ResultPage />} />
        <Route path="packages" element={<PackageListPage />} />
        <Route path="packages/:packageId" element={<PackageDetailPage />} />
      </Route>
    </Routes>
  )
}

export default App
