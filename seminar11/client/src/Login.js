import { useState, useEffect } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const fetchLogin = async () => {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }

        const result = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, options);
        const response = await result.json();

        if(response.success) {
            localStorage.setItem('token', response.data.token);
            window.location.href = '/';
        }
    }

    return (
        <div className='formWrapper'>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Your email.."
                onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"
                onChange={(e) => setPassword(e.target.value)} />

            <input type="submit" value="Submit" onClick={() => fetchLogin()} />
            {error.length > 0 && <p>{error}</p>}
        </div>
    )
}

export default Login;