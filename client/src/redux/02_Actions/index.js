import { GET_ALL_VIDEOS,  GET_VIDEOS_BY_NAME, GET_VIDEO_DETAIL, ADD_VIDEOGAMES,
         GET_ALL_GENRES,  GET_ALL_PLATFORMS,  FILTER_BY_GENRE,  FILTER_BY_VIDEO, 
         ORDERING_ACTION, PAGING_ACTION } from '../01_Action_Types/index';

import axios from 'axios'

export function getAllVideos() {
   return async (dispatch) => {
      try {
         const videos = await axios.get('http://localhost:3001/videos')
         return dispatch({
            type    : GET_ALL_VIDEOS,
            payload : videos.data,
         })
      }
      catch (error) {
         console.log(error)
      }
   }
}

export function getVideosByName(name) {
   return async (dispatch) => {
      try {
         const videosByName = await axios.get(`http://localhost:3001/videos?name=${name}`)
         return dispatch({
             type    : GET_VIDEOS_BY_NAME,
             payload : videosByName.data,
         })
     }
     catch (error) {
          console.log(error)
     }
   }
}
 
export function getVideoDetail(id) {
    return async (dispatch) => {
       try {
          const videoDetail = await axios.get(`http://localhost:3001/videos/${id}`)
          return dispatch({
             type    : GET_VIDEO_DETAIL,
             payload : videoDetail.data,
          })
       } 
       catch (error) {
          console.log(error)
       }
   }
}

export function addVideogame() {
   return async (dispatch) => {
      try {
         
         
      } 
      catch (error) {
         console.log(error)
      }
   }
}

export function getAllGenres() {
   return async (dispatch) => {
      try {
         const genres = await axios.get('http://localhost:3001/genres')
         return dispatch({
            type    : GET_ALL_GENRES,
            payload : genres.data,
         })
      } 
      catch (error) {
         console.log(error)
      }  
   }
}

export function getAllPlatforms() {
   return async (dispatch) => {
      try {
         const platforms = await axios.get('http://localhost:3001/platforms')
         return dispatch({
             type    : GET_ALL_PLATFORMS,
             payload : platforms.data,
         })
      }
      catch (error) {
         console.log(error)
      }
   }
}