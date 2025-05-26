import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Accomodation from './pages/Accomodation.jsx'
import Error from './pages/Error.jsx'

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:id" element={<Accomodation />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default AppRouter
