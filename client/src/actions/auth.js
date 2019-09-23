import axios from 'axios'

export const fetchUserAction = () =>{
    return (dispatch) =>{
        axios.get('/api/current_user')
            .then((data) =>{
                dispatch({
                    type:'GET_USER',
                    payload:data.data
                })
            })
    }
}