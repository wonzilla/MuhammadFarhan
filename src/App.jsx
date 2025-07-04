





// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
// Components
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import RootPage from './pages/RootPage';


const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element : <AppLayout/>,
    children : [
     {
        path : "/",
        element : <RootPage/>
      },
      {
        path : "/about",
        element : <About/>
      },
       {
        path : "/skills",
        element : <Skills/>
      },
       {
        path : "/projects",
        element : <Projects/>
      },
       {
        path : "/contact",
        element : <Contact/>
      }
    ]
  }
],   {
    basename: "/MuhammadFarhan" 
  })
function App() {
return(
  <>
  
  <RouterProvider router={router}></RouterProvider>
  </>
)

  
}
export default App;