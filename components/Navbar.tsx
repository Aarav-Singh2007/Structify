import React from 'react'
import {Box} from "lucide-react"
import { Button } from './ui/Button';
import { useOutletContext } from 'react-router';

const Navbar = () => {
    // const isSignedIn = true;
    // const username = "Aarav";
    const { isSignIn , userName,signIn,signOut } = useOutletContext<AuthContext>()
    const handleAuthClick = async()=>{
        if(isSignIn){
            try{
                await signOut();     

            }catch(e){
                console.error(e);

            }
        }
        try{
            await signIn();


        }catch(e){
            console.error(e);

        }

     };
  return (
    <header className='navbar'>

        <nav className='inner'>
            <div className='left'>
                <div className='brand'>
                    <Box className="logo"/>


                    <span className='Name font-bold'>Structify</span>

                </div>
                    <ul className='links'>
                        <a href="#">Product</a>
                        <a href="#">Pricing</a>
                        <a href="#">Community</a>
                        <a href="#">EnterPrise</a>

                    </ul>
            </div>
            <div className='actions'>
                {isSignIn?(
                    <>
                    <span className='greetings'>
                        {userName?`HI,${userName}`: 'Signed In'}
                    </span>
                    <Button size='sm' onClick={handleAuthClick} className='btn'>
                        Log Out
                    </Button>
                    
                    </>

                ):(
                    <>
                    <Button onClick={handleAuthClick} size='sm' variant="ghost">LogIn</Button>

                    <a href="#upload" className='cta'>Get Started</a>
                    </>

                )}
            </div>
        </nav>
    </header>
  )
}

export default Navbar