import { useState } from "react";
import './NewsletterSignup.css';

function NewsletterSignup()
{
    const[name,setName]=useState("");
    const[mail,setMail]=useState("");
    const[sub,setSub]=useState(false);

    const fState=(e)=>{
        e.preventDefault();
        setSub(true);
    };

    return(
        <div className="News">
        {!sub?(
        
            <form onSubmit={fState}>
                <h4>Sign up for our Newsletter</h4>
                <input type="text" value={name} placeholder="Full Name" onChange={(e)=>setName(e.target.value)}/>
                <input type="email" value={mail} placeholder="Email Address" onChange={(e)=>setMail(e.target.value)}/>
                <button>Subscribe</button>
            </form>
        ):(
            <p>Thank you for subscribing {name}.</p>
        )}
        </div>
    );
}

export default NewsletterSignup;