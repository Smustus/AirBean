import React, { useEffect, useState } from 'react'
import './LoginHeader.css'
import { checkToken } from '../../utilities/fetch';
import { setLoginState } from '../../reducers/loggedInReducer';
import { useDispatch, useSelector } from 'react-redux';

const LoginHeader = () => {
  const loggedIn = useSelector((state: any) => state.loginStatus);
  const dispatch = useDispatch();
  const [activePath, setActivePath] = useState(window.location.pathname);

  useEffect(() => {
    async function isloggedIn(){
      try {
        const token = await checkToken();
        console.log('token');
        if(!token){
          dispatch(setLoginState(false));
          return;
        } 
        dispatch(setLoginState(token.success))

      } catch (error) {
        console.error(error);
        dispatch(setLoginState(false));
      }
    }
    isloggedIn();
  }, [dispatch]);

  const handleLogout = () => {
    sessionStorage.setItem('hrefken', '');
    dispatch(setLoginState(false));
  }

  const handleNavigation = (path: string) => {
    setActivePath(path);
    window.location.href = path;
  };

  return (
    <section className='loginHeader'>
        {
          loggedIn ? 
            <article>
              <a href='/navigation' onClick={(e) => {
                e.preventDefault();
                handleNavigation('/navigation');
                }} 
                className={activePath === '/navigation' ? 'active' : ''}
                >Start
              </a>

              <a href='/orders' className={activePath === '/navigation' ? 'active' : ''}>Orderhistorik</a> 

              <a href='/' onClick={(e) => {
                e.preventDefault();
                handleLogout();
                }}>Logga ut
              </a>
            </article> 
            :
            <article>
              <a href='/navigation' onClick={(e) => {
                e.preventDefault();
                handleNavigation('/navigation');
                }} 
                className={activePath === '/navigation' ? 'active' : ''}
                >Start
              </a>

              <a
              href='/login'
              className={activePath === '/login' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/login');
              }}>Logga in
            </a>

            <a
              href='/create'
              className={activePath === '/create' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/create');
              }}>Skapa konto
            </a>
            </article>
        }
    </section>
  )
}

export default LoginHeader