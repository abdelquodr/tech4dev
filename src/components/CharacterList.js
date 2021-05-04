import {Character} from './Character'
import {Info} from './info'
import Pagination from './Pagination'

import Spinner from '../images/fancybox_loading@2x.gif'

export const CharacterList = ({data, loading, err})  => {
    return  (
  <div>
    <div className="hero common-hero" style={{height: "5rem" }} > 
      </div>
       {loading  ?  <img style={{ display:"block", margin: "25rem auto" , }} src={Spinner} alt="spinner" /> :
      <div className="page-single movie_list">
        <div className="container">
          <div className="row ipad-width2">
            <div className="col-md-8 col-sm-12 col-xs-12">
            <Info  count={data?.count} /> 
            { data?.results?.map( (obj, ind) => (
              <Character key={ind} name={obj?.name} birth={obj?.birth_year} skin={obj?.skin_color} hair={obj?.hair_color} eye={obj?.eye_color} mass={obj?.mass} filmsLength={obj?.films.length} vehiclesLength={obj?.vehicles.length} ></Character>
            ))}
              <Pagination numPerPage={data?.results?.length} total={data?.count} nextPage={data?.next} prevPage={data?.previous} />
            </div>     
          </div>
        </div>
    </div>
    }
    {err && <p style={{color: '#f72585'}}>Something went wrong. Please try again later</p>}
</div>
    )
}