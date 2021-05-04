
import {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import singleImg from '../images/uploads/movie-single.jpg'
import {useParams} from 'react-router-dom'
 
const CharacterDetails = ({getIndividualCharacter}) => {

  const {name} = useParams()
  const [character, setCharacter] = useState({})
  const search = name.split(':')[1];

  useEffect( () => {
    setCharacter(getIndividualCharacter(search))
  }, [search])

return (
<div className="page-single movie-single movie_single" style={{height: "100vh"}} >
  <div className="container">
    <div className="row ipad-width2">
      <div className="col-md-4 col-sm-12 col-xs-12">
        <div className="movie-img sticky-sb">
          <img src={singleImg} alt="single-character" />
          <div className="movie-btn">	
          </div>
        </div>
      </div>
      <div className="col-md-8 col-sm-12 col-xs-12">
        <div className="movie-single-ct main-content">
          <div className="movie-tabs">
            <div className="tabs">
              <div className="tab-content">
                <div id="overview" className="tab active">
                  <div className="row">
                    <div className="col-md-4 col-xs-12 col-sm-12">
                      <div className="sb-it">
                        <h6>Name: </h6>
                        <p><span href="#">{character?.[0]?.name}</span></p>
                      </div>
                      <div className="sb-it">
                        <h6>Birth Year: </h6>
                        <p><span >{character?.[0]?.birth_year}</span></p>
                      </div>
                      <div className="sb-it">
                        <h6>Gender: </h6>
                        <p>{character?.[0]?.gender}</p>
                      </div>
                      <div className="sb-it">
                        <h6>height:</h6>
                        <p>{character?.[0]?.height}</p>
                      </div>
                      <div className="sb-it">
                        <h6>Films:</h6>
                        <p>{character?.[0]?.films.length}</p>
                      </div>
                      <div className="sb-it">
                        <h6>Skin Color:</h6>
                        <p>{character?.[0]?.skin_color}</p>
                      </div>
                      <div className="sb-it">
                        <h6>Eye Color:</h6>
                        <p>{character?.[0]?.eye_color}</p>
                      </div>
                      <div className="sb-it">
                        <h6>Hair Color: </h6>
                        <p>{character?.[0]?.hair_color}</p>
                      </div>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>  
    )
}


const mapStateToProps = (state) => {
 
    return {
      getIndividualCharacter: (name) =>  (state?.post?.results?.filter(item => (item.name === name)))
    }
}

export default connect(mapStateToProps)(CharacterDetails)