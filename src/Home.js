import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navig=useNavigate()

    return (
        <div>
            <h1> Home pages</h1>
            <button onClick={()=>navig('/login')}>Login</button>
            

        </div>
    );
}

export default Home;