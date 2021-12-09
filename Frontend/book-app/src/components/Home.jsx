import React, {useContext} from 'react'
// import {AccountContext} from './context/AccountProvider';
// import Login from './account/Login';
import NavBar from './NavBar';
const Home = () => {
    // const {account} = useContext(AccountContext);
    return (
        <>
            <img style ={{width:"100%"}}src="https://compote.slate.com/images/a92fef3e-c1db-4cbf-93da-dae90c0b9388.jpeg?width=1200&rect=4395x2930&offset=0x0" alt="HOME PAGE"></img>
            <NavBar/>
        </>
    )
}

export default Home
