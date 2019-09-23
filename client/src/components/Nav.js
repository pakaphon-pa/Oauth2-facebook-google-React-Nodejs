import React , { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const Nav = (props) => {
    const rederContect = () =>{
        const { user } = props
        switch(user){
            case null:
                return <li><a href='/'>loading</a></li>
            case false:    
                return <li><a href='/auth/google'>signup</a></li>
                default:
                    return(
                        <Fragment>
                              <li><a href="/api/logout">logout</a></li>
                              <li><Link to="/profile">profile</Link></li>     
                        </Fragment>
                    )
        }
    }
    return (
        <nav>
        <div className="nav-wrapper">
            <Link to={props.user ? '/profile' : '/'} className="brand-logo">Logo</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                {rederContect()}
            </ul>
        </div>
        </nav>
    )
}

const mapStateToProps = (state) =>{
    return{
        user:state.auth
    }
}

export default connect(mapStateToProps)(Nav)
