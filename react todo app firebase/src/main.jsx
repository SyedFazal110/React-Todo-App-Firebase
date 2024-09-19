import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx";
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Login from './pages/Login';
import Register from './pages/Register';
import Todo from './pages/Todo';

let router = createBrowserRouter([
  {
    path : "/",
    element : <Login/>,
  },
  {
    path : "layout",
    element : <Layout/>
  },
  {
    path : "register",
    element : <Register/>
  },
  {
    path : "todo",
    element : <Todo/>
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={ router }>
    <App/>
  </RouterProvider>
)
