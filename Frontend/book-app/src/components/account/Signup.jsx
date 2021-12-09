import React, {useContext,useState} from 'react'
import SignupForm from './SignupForm';
// import {GoogleLogin} from 'react-google-login';
import { AccountContext } from '../context/AccountProvider';
import {Dialog} from '@material-ui/core';

const Signup = ({signup,setSignup}) => {
    const {openSignup,setOpenSignup} = useContext(AccountContext);
    const handleClose = () =>{
        setOpenSignup(false);
        const newsignup = {...signup,status:false};
        setSignup(newsignup);
    }
    return (
        <Dialog
        open={openSignup}
        onClose={handleClose}
      ><SignupForm/>
      </Dialog>
    )
}

export default Signup
