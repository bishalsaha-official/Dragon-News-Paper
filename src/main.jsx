import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeLayouts from './layouts/HomeLayouts';
import CategoryNews from './components/CategoryNews';
import AuthLayout from './layouts/AuthLayout';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './provider/AuthProvider';
import NewsDetails from './components/NewsDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        path: '/',
        element: <Navigate to={'category/01'}></Navigate>
      },
      {
        path: '/category/:id',
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      }
    ]
  },
  {
    path: '/news/:id',
    element: <NewsDetails></NewsDetails>,
    loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
