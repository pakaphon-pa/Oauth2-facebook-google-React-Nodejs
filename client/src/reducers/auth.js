export default function(state = null , actions){
    const { type , payload } = actions

    
    switch (type) {
        case 'GET_USER':

            return payload || false
    
        default:
            return state
    }
}