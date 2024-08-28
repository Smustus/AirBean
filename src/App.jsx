import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import LoginHeader from './components/loginHeader/LoginHeader';

function App() {

  return (
    <>
      <LoginHeader />
      
      <RouterProvider router={router} />
     
    </>
    
  )
}

export default App