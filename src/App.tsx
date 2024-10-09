import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import RootLayout from './layouts/RootLayout'
import Profile from './pages/profile/Profile'

function App() {
  return (
  <Routes>
    <Route element={<RootLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
    </Route>
  </Routes>
  )
}

export default App
