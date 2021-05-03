import axios from "axios"

export const getPost = (page) => {
    return (dispatch, getState) => {
        dispatch({ type: 'FETCH_POST_BEGINS', loading: true })

        axios.get(`https://swapi.dev/api/people?${page}`)
       .then( res => {
        return dispatch(getResult( 'FETCH_POST_SUCCESS',  res.data))
       })
     .catch(err => {
                dispatch(getResult('FETCH_POST_ERROR', err))
            } )
    } 
}


const getResult = ( actionType, payload) => {
    return {
         type: actionType, post: payload 
    }
}

