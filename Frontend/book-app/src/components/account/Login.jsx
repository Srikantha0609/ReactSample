import React, {useContext,useState} from 'react'
// import {GoogleLogin} from 'react-google-login';
import { AccountContext } from '../context/AccountProvider';
import {Dialog} from '@material-ui/core';
import LoginForm from './LoginForm';

const Login = ({login,setLogin}) => {
    const {openLogin,setOpenLogin} = useContext(AccountContext);
    const handleClose = () =>{
        setOpenLogin(false)
        const newlogin = {...login,status:false,color:'#fff'}
        setLogin(newlogin)
    }
    return (
        <>
      <Dialog
        open={openLogin}
        onClose={handleClose}
      > <LoginForm/>
      </Dialog>
        </>
    )
}

export default Login