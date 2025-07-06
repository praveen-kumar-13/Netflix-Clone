
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Player = () => {

  const navigate =useNavigate();

  const {id} = useParams();

  const [apiVideo, setapiVideo]= useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGJhMDNhZGE1M2I5NWI1Yjc5YTM1YjM2ZWVkZTk2MiIsIm5iZiI6MTc0OTk2MzMxMS44OTYsInN1YiI6IjY4NGU1MjJmNjFiNDJlNzVhOTVjN2I2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.agi9CVXtBpFiLeedfyNn1sjVBlsIqmkBTbQLIJ9Eop8'
  }
};

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setapiVideo(res.results[0]))
  .catch(err => console.error(err));

})

  return (
    <div className='player'>
      <img src={ back_arrow_icon} onClick={()=>{navigate(-2)}} alt="" />
      <iframe width='90%' height='90%' frameBorder='0' 
      src={`https://WWW.youtube.com/embed/${apiVideo.key}`} title='trailer' allowFullScreen></iframe>
    <div className="player-info">
        <p>{apiVideo.published_at.slice(0,10)}</p>
        <p>{apiVideo.name}</p>
        <p>{apiVideo.type}</p>
    </div>
    </div>
  )
}

export default Player
