import React from 'react'
const Home = () => {
   

    
    return (
        <div className="card" style={{margin:"10%",padding:"20px",textAlign:"center"}}>
            <div className="row">
                <a href="/auth/google" className="waves-effect waves-light btn">Signup with Google</a>
            </div> 
            <div className="row">
                <a href="/auth/facebook" className="waves-effect waves-light btn">Signup with facebook</a>
            </div>    
        </div>
    )
}


export default Home
