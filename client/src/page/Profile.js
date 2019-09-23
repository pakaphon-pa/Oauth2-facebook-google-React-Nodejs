import React , {useState , useEffect} from 'react'
import { connect } from 'react-redux'
const Profile = (props) => {
    console.log(props)
    const [userdata , setUserData] = useState({
        name:"loading",
        picture:""
    })

    const [loading , setloading] = useState(false)

    useEffect(() =>{
    
            setloading(true)
            if(props.user){
                setUserData({
                    name:props.user.name,
                    picture:props.user.picture
                })
            }
            setloading(false)
        
    },[props.user])

    if (loading) {
        return (
          <h3>Loading ...</h3>
        )
      }
  
    return (
        <div>
           
             <h1>here is your profile </h1>
            <div className="card" style={{margin:"10%",padding:"10px",textAlign:"center"}}>
               <h2>Name : {userdata.name}</h2>
               <img className="circle" src={userdata.picture} alt=""/>  
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        user : state.auth
    }
}

export default connect(mapStateToProps)(Profile)
