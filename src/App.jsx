import { Route, Routes, Navigate } from 'react-router-dom'
import { Nav } from './components/Nav'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { SearchPage } from './pages/SearchPage'
import { PhonesPage } from './pages/PhonesPage'
import { BestSellerPage } from './pages/BestSellerPage'

function App() {
  return (
    <>
      <header className='hdr bc-bl'>
        <h1 className='title'>Práctica SPA</h1>
        <Nav />
      </header>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='btsellers' element={<BestSellerPage/>}/>
        <Route path='phones' element={<PhonesPage/>} />
        <Route path='search' element={<SearchPage/>}/>
        <Route path='login' element={<LoginPage/>} />

        {/* <Route path='/*' element={<LoginPage />} /> */}
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>


    </>
  )
}

export default App
