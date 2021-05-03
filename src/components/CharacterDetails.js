
import { connect } from 'react-redux';
import singleImg from '../images/uploads/movie-single.jpg'
import {useParams} from 'react-router-dom'
 
export const CharacterDetails = () => {

  const {name} = useParams()
  console.log(name)
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
                    <div className="col-md-8 col-sm-12 col-xs-12">
                      <p>Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat span virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction.</p>
                      
                      <div className="mv-user-review-item">
                        <h3>Best Marvel movie in my opinion</h3>
                        <p className="time">
                          17 December 2016 by <span href="#"> hawaiipierson</span>
                        </p>
                        <p>This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of span back story can also help audiences relate more to different characters better, and it connects span bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-xs-12 col-sm-12">
                      <div className="sb-it">
                        <h6>Director: </h6>
                        <p><span href="#">Joss Whedon</span></p>
                      </div>
                      <div className="sb-it">
                        <h6>Writer: </h6>
                        <p><span >Joss Whedon,</span> <span href="#">Stan Lee</span></p>
                      </div>
                      <div className="sb-it">
                        <h6>Stars: </h6>
                        <p><span href="#">Robert Downey Jr,</span> <span href="#">Chris Evans,</span> <span href="#">Mark Ruffalo,</span><span href="#"> Scarlett Johansson</span></p>
                      </div>
                      <div className="sb-it">
                        <h6>Genres:</h6>
                        <p><span href="#">Action, </span> <span > Sci-Fi,</span> <span >Adventure</span></p>
                      </div>
                      <div className="sb-it">
                        <h6>Release Date:</h6>
                        <p>May 1, 2015 (U.S.A)</p>
                      </div>
                      <div className="sb-it">
                        <h6>Run Time:</h6>
                        <p>141 min</p>
                      </div>
                      <div className="sb-it">
                        <h6>MMPA Rating:</h6>
                        <p>PG-13</p>
                      </div>
                      <div className="sb-it">
                        <h6>Plot Keywords:</h6>
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


const mapStateToProps = (state, ownprops) => {
  let name = ownprops.match.params.name;

  return{
    post: state.post.find(each => each.name === name)
  }
}

export default connect(mapStateToProps)(CharacterDetails)