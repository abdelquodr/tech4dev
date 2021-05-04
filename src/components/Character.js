import mv1 from '../images/uploads/mv1.jpg'
import mv2 from '../images/uploads/mv2.jpg'
import mv3 from '../images/uploads/mv3.jpg'
import mv4 from '../images/uploads/mv4.jpg'
import mv5 from '../images/uploads/mv5.jpg'
import ceb1 from '../images/uploads/ceb1.jpg'
import ceb2 from '../images/uploads/ceb2.jpg'
import ceb3 from '../images/uploads/ceb3.jpg'
import ceb4 from '../images/uploads/ceb4.jpg'
import ceb5 from '../images/uploads/ceb5.jpg'
import ceb6 from '../images/uploads/ceb6.jpg'
import ceb7 from '../images/uploads/ceb7.jpg'
import ceb8 from '../images/uploads/ceb8.jpg'
import ceb9 from '../images/uploads/ceb9.jpg'

import {Link } from 'react-router-dom'


export const RandomizeImage = () => {
	const images = [mv1, mv2, mv3, mv4, mv5, ceb1, ceb2, ceb3, ceb4, ceb5, ceb6, ceb7, ceb8, ceb9];

	const select = Math.floor(Math.random() * images.length)
	return images[select];
}


export const Character = ({name, birth, mass, eye,hair, skin, filmsLength,  vehiclesLength}) => {

    return (
          <div className="movie-item-style-2">
          <img src={RandomizeImage()} alt='randompic' />
          <div className="mv-item-infor">
            <Link to={`/character-details/:${name}`}> 
             <h6><span>{name} <span>({birth})</span></span></h6>
            </Link> 
            <p className="rate"><i className="ion-android-star" /><span>{mass}</span> mass</p>
            <div style={{paddingTop: "4rem"}}></div>
            <p className="run-time"> Eye Color:  {eye}   .     <span>Hair Color: {hair} </span>    .     <span>Skin Color: {skin} </span></p>
            <p>Starring In: <span> {filmsLength} Films</span></p>
            <p>Vehicles: <span >{vehiclesLength}</span></p>
          </div>
        </div>
    )
}