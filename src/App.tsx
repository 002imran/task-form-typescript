import './App.css'
import { Routes, Route } from 'react-router-dom'
import Form from './Pages/Form'
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './Pages/Home';
import PrivateRoute from './Routes/PrivateRoute';
import { ToastContainer } from 'react-toastify';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
 
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Routes>
         <Route path='/' element={<Form />} /> 
          <Route path='/homepage' element={<PrivateRoute Component={HomePage} />} />
      </Routes>
         <ToastContainer />
    </ThemeProvider>
  )
}

export default App
