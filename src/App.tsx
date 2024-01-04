
import './App.css'
import { HomeContainer, AboutContainer, ContactContainer, ProductContainer, ProtectContainer } from './containers';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import ProtectLayout from './layouts/ProtectLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: '/',
          element: <HomeContainer />
        },
        {
          path: '/about',
          element: <AboutContainer />
        },
        {
          path: '/contact',
          element: <ContactContainer />
        },
        {
          path: '/product-detail/:id/custom/:wulan',
          element: <ProductContainer />
        },
      ]
    },
    {
      path: '*',
      element: <h1>404</h1>
    },
    {
      element: <ProtectLayout />,
      children: [
        {
          path: '/protect',
          element: <ProtectContainer />
        },
      ]
    }
  ])

  return (
    <div className="app">
      <RouterProvider router={router}/>
      {/* <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path='/' element={<HomeContainer />}/>
            <Route path='/about' element={<AboutContainer />}/>
            <Route path='/contact' element={<ContactContainer />}/>
          </Route>
          <Route path='*' element={<h1>404</h1>}/>
        </Routes>
      </BrowserRouter> */}
    </div>
    // <div className="app">
    //   <HomeContainer />
    // </div>
  )
}

export default App
