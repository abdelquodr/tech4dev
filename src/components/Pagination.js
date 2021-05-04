
import {useState} from 'react'
import { connect } from 'react-redux';
import { getPost } from '../actions';


const Pagination = ({numPerPage, total, nextPage, prevPage , fetchPost} ) => {

  // const {numPerPage, total, nextPage, prevPage , fetchPost} = props;

        const  [paginate, setpaginate] = useState('');      

        const nextToPage = nextPage?.split('?')[1]
        const prevToPage = prevPage?.split('?')[1];

      const handleClickPrev = () => {
        fetchPost(prevToPage)
        const page = prevToPage?.split('=')[2];
        setpaginate(() => page)
      }

      const handleClickNext = () => {
          debugger
          const page = nextToPage?.split('=')[2];
          setpaginate(page)
          fetchPost(nextToPage)
      }

      console.log(paginate)

    return (
        <div className="topbar-filter" >
            <label>No per page:</label>
            <div style={{marginTop: "5px", marginBottom: "5px"}}>
              <p value="range">{numPerPage} characters</p>
            </div> 
            <div className="pagination2">
              <span>Page { paginate || 1 } of {Math.ceil(total/numPerPage)}</span>
              <button onClick={handleClickPrev} >Prev</button>
              <button onClick={handleClickNext}  >Next</button>
            </div>
          </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (page) => { dispatch(getPost(page)) }
  }
}

export default connect( null, mapDispatchToProps)(Pagination)