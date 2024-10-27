import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';


import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Courses from './home files/Courses';
import Course from './course file/Course';
import CourseDataDetails from './course file/CourseDataDetails';
import AllBlogs from './blogs file/AllBlogs';
import ABdataDetails from './blogs file/ABdataDetails';
import Shop from './shop file/Shop';
import Contact from './contact file/Contact';


// Create a client
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element:  <Home></Home>  ,
      },
      {
        path: "/course",
        element:  <Course></Course> ,
        loader: () => fetch('http://localhost:5000/courseData')
      },
      {
        path: "/course/:id",
        element:  <CourseDataDetails></CourseDataDetails> ,
        loader: ({params}) => fetch(`http://localhost:5000/courseData/${params.id}`)
      },
      {
        path: "/blogs",
        element: <AllBlogs></AllBlogs> ,
        loader: () => fetch('http://localhost:5000/ABlogsData')
      },
      {
        path: "/blogs/:id",
        element:  <ABdataDetails></ABdataDetails> ,
        loader: ({params}) => fetch(`http://localhost:5000/ABlogsData/${params.id}`)
      },
      {
        path: "/shop",
        element:  <Shop></Shop> ,
        
      },
      {
        path: "/contact",
        element: <Contact></Contact> ,
        
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
   
  </StrictMode>,
)
