import { RouterProvider } from 'react-router'
import './App.css'
import { routePaths } from './routes'

function App() {
  return (
    <>
      <RouterProvider router={routePaths} />
    </>
  )
}

export default App