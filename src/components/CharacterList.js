import {Character} from './Character'
import {Info} from './info'
import Pagination from './Pagination'



export const CharacterList = ({data})  => {
    return  (
  <div>
    <div className="hero common-hero" style={{height: "5rem" }} > 
    </div>
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
</div>
    )
}