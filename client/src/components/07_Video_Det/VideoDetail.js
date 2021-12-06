import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import { getVideoDetail } from '../../redux/02_Actions/index.js'
import '../07_Video_Det/VideoDetail.css'

function VideoDetail(idVideo) {
   //props: idVideo
    const { id } = idVideo.match.params
    const  vid_Det  = useSelector((state) => state.det_Video)
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
       dispatch(getVideoDetail(id))
    },[dispatch,id])

    let descrip= vid_Det.description || " " 
    let generos = []; 
    let genres = vid_Det.genres || []; genres.map(e => generos.push(e.name));
    var plataformas = []; 
    let platfr = vid_Det.platforms || []; platfr.map(e => plataformas.push(e.platform.name));
    
    // if (isNaN(id)) {
    //     plataformas=vid_Det.platforms
    //  }else {
    //    let platfr = vid_Det.platforms || []; platfr.map(e => plataformas.push(e.platform.name)); 
    // }
    
    
    
    return (
        <div className = "container">
             <>
                <h1 className="name">{vid_Det.name}</h1>
                <img src={vid_Det.background_image} className="image1"/>
                <img src={vid_Det.background_image_additional} className="image2"/>
                
                
                   <p className = 'genres1'>
                      <strong className = 'gen1'>Genres :  </strong> {generos.join(', ')}
                   </p>

                   <p className = 'platform1'>
                      <strong className = 'plat1'>Platforms : </strong> {plataformas.join(', ')}
                   </p>

                   <p className = 'rating-released'>
                      <strong className = 'rat1'>Rating : </strong>  {vid_Det.rating}
                      <strong className = 'rat1'>   Released : </strong> {vid_Det.released}
                   </p>
                
                
                <div className="des_container">
                    <strong className = 'descrip'>D e s c r i p t i o n :  </strong>
                    <p className ="description">{descrip.substr(0,1000)}</p>
                </div>
                
                <button className='gotoback'>
                    <NavLink className ='link' to='/home'>
                       go to back
                   </NavLink>
                 </button>
            </>
        </div>
    )
}

export default VideoDetail;