import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {lazy,Suspense} from 'react'

const Home = lazy(() => import('./Pages/Home'));
const Product = lazy(() => import('./Pages/Product'));

function App() {
  

  return (
    <>
<BrowserRouter>
<Routes>
<Route
          exact
          path="/"
          element={
            <Suspense fallback={<div className='animate-pulse'> Loading... </div>}>
              <Home />
            </Suspense>
          }
       />
       <Route
          exact
          path="/product"
          element={
            <Suspense fallback={<div className='animate-pulse'> Loading... </div>}>
              <Product />
            </Suspense>
          }
       />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
