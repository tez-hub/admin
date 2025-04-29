
import './App.css'
import AnalyticsCards from './components/admin/analytics'
import LineChartComponent from './components/admin/LineChart'
import AdminNav from './components/admin/sidenav'

function App() {

  return (
    <div className="flex">
      <AdminNav />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
        <AnalyticsCards />
        <LineChartComponent />
      </div>
    </div>
  )
}

export default App
