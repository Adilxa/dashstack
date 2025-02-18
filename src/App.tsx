import { Routes } from 'react-router'
import './App.css'
import { Route } from 'react-router'
import Layout from './layout/Layout'

function App() {

  return (
    <Layout>
      <Routes>
        <Route index element={<h1>Homepage</h1>} />
        <Route path="about" element={<h1>About</h1>} />
      </Routes>
    </Layout>
  )
}

export default App
