import React, { useEffect, useState } from 'react'
import './LoginHeader.css'
import { checkToken } from '../../utilities/fetch';
import { setLoginState } from '../../reducers/loggedInReducer';
import { useDispatch, useSelector } from 'react-redux';

const LoginHeader = () => {
  const loggedIn = useSelector((state: any) => state.loginStatus);
  const dispatch = useDispatch();


  useEffect(() => {
    async function isloggedIn(){
      try {
        const token = await checkToken();
        console.log(token);
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
    sessionStorage.setItem('token', '');
    dispatch(setLoginState(false));
  }

  return (
    <section className='loginHeader'>
        {
          loggedIn ? 
            <article><a href='/navigation'>Start</a> <a href='/orders'>Orderhistorik</a> <a href='/' onClick={handleLogout}>Logga ut</a></article> 
            :
            <article><a href='/navigation'>Start</a> <a href='/login'>Logga in</a> <a href='/create'>Skapa konto</a></article>
        }
    </section>
  )
}

export default LoginHeader