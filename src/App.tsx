import { Routes } from 'react-router'
import './App.css'
import { Route } from 'react-router'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'

function App() {

  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<h1>About</h1>} />
      </Routes>
    </Layout>
  )
}

export default App
