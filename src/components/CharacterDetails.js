
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

  // console.log(getIndividualCharacter(search))
  console.log(character)

return (
<div className="page-single movie-single movie_single" style={{marginTop: "0rem"}} >
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
                    {/* <div className="col-md-8 col-sm-12 col-xs-12"> */}
                      {/* <p>Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat span virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction.</p> */}
                      
                      {/* <div className="mv-user-review-item">
                        <h3>Best Marvel movie in my opinion</h3>
                        <p className="time">
                          17 December 2016 by <span href="#"> hawaiipierson</span>
                        </p>
                        <p>This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of span back story can also help audiences relate more to different characters better, and it connects span bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.</p>
                      </div> */}
                    {/* </div> */}
                    <div className="col-md-4 col-xs-12 col-sm-12">
                      <div className="sb-it">
                        <h6>Name: </h6>
                        <p><span href="#">{character[0]?.name}</span></p>
                      </div>
                      <div className="sb-it">
                        <h6>Birth Year: </h6>
                        <p><span >{character[0]?.birth_year}</span></p>
                      </div>
                      <div className="sb-it">
                        <h6>Gender: </h6>
                        <p>{character[0]?.gender}</p>
                      </div>
                      <div className="sb-it">
                        <h6>height:</h6>
                        <p>{character[0]?.height}</p>
                      </div>
                      <div className="sb-it">
                        <h6>Films:</h6>
                        <p>{character[0]?.films.length}</p>
                      </div>
                      <div className="sb-it">
                        <h6>Skin Color:</h6>
                        <p>{character[0]?.skin_color}</p>
                      </div>
                      <div className="sb-it">
                        <h6>Eye Color:</h6>
                        <p>{character[0]?.eye_color}</p>
                      </div>
                      <div className="sb-it">
                        <h6>Hair Color: </h6>
                        <p>{character[0]?.hair_color}</p>
                      </div>
                      {/* <div className="sb-it">
                        <h6>Plot Keywords:</h6>
                      </div> */}
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