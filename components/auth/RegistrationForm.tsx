"use client";
//typeScript
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegistrationForm = () => {

  const [error, setError] = useState("")

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setError("");
    try {
      const formData = new FormData(e.currentTarget);
      const fname = formData.get('fname') as string;
      const lname = formData.get('lname') as string;
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;

      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({fname, lname, email, password})
      })

      if(res.status === 201){
        router.push('/login');
      } else {
       
        if(res.status === 409){
          setError('User already exists');
          return;
        }
        
        setError('Failed to create account');
      }
    } catch (err) {
    
      
      setError('Failed to create account');
      
    }

  }

  return (
    <>
     {error && <p className="text-red-500 text-center">{error}</p>}

    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" id="fname" />
      </div>

      <div>
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" id="lname" />
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button type="submit" className="btn-primary w-full mt-4">
        Create account
      </button>
    </form></>
  );
};

export default RegistrationForm;
