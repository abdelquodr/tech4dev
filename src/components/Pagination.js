
import {useState} from 'react'
import { connect } from 'react-redux';
import { getPost } from '../actions';

const Pagination = (props) => {

 const  [currentPage, setCurrentPage ] = useState(null)

  const {numPerPage, total, nextPage, prevPage, fetchPost} = props;
    const nextToPage = nextPage?.split('?')[1]
    const prevToPage = prevPage?.split('?')[1];

    const handleClickPrev = (e) => {
      fetchPost(prevToPage)
      const page = prevToPage === null ? 1 : prevToPage?.split('=')[2]
      setCurrentPage(page)
    }

    const handleClickNext = (e) => {
        fetchPost(nextToPage)
        const page = nextToPage?.split('=')[2]
        setCurrentPage(page)
    }

    

    return (
        <div className="topbar-filter">
            <label>No per page:</label>
            <select>
              <option value="range">{numPerPage} characters</option>
              {/* <option value="saab">10 Movies</option> */}
            </select> 
            <div className="pagination2">
              <span>Page {currentPage} of {Math.ceil(total/numPerPage)}</span>
              <button onClick={handleClickPrev} >{ 'Prev' }</button>
              <button onClick={handleClickNext}  >{'Next' }</button>
              {/* <span ><i className="ion-arrow-right-b" /></span> */}
            </div>
          </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (page) => { dispatch(getPost(page)) }
  }
}

// export default Pagination
export default connect( null, mapDispatchToProps)(Pagination)