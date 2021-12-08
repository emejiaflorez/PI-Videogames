import { GET_ALL_VIDEOS,    GET_VIDEOS_BY_NAME, GET_VIDEO_DETAIL, GET_ALL_GENRES,  
         GET_ALL_PLATFORMS, FILTER_BY_GENRE,    FILTER_BY_NAME,  ORDERING_ACTION, 
         PAGING_ACTION } from '../01_Action_Types/index';

// all_Videos: Array de objetos despliega todos los videos en el home
// fil_Videos: Array de objetos despliega todos los filtros que se hacen desde el front
// Objeto que muestra el detalle de cada video seleccionado de una card
const initialState = {all_Videos:[], fil_Videos:[], det_Video:{}, all_Genres:[], all_Platforms:[]}

function rootReducer(state = initialState, action) {
   switch (action.type) {
         case GET_ALL_VIDEOS :
           return {
              ...state,
                 all_Videos: action.payload,
                 fil_Videos: action.payload,
           }
     
        case GET_VIDEOS_BY_NAME:
          return {
             ...state,
                fil_Videos: action.payload,
          }
     
        case GET_VIDEO_DETAIL:
          return {
             ...state,
                det_Video: action.payload,
          }  

         case GET_ALL_GENRES:
             return {
               ...state,
                  all_Genres: action.payload,
            }
           
          case GET_ALL_PLATFORMS:
            return {
               ...state,
                  all_Platforms: action.payload,
            }
         
          case FILTER_BY_GENRE:
              if (action.payload === "All"){
                 return {
                   ...state, 
                      fil_Videos : state.all_Videos
                 }
              }
              else
              {
               const resul=[];
               for (let i=0; i<state.all_Videos.length; i++){
                   for (let j=0; j<state.all_Videos[i].genres.length; j++){
                         if (state.all_Videos[i].genres[j].id==action.payload){
                               resul.push(state.all_Videos[i])
                         }
                   }
               }
               console.log("action",action.payload)
               console.log("yyyyyy",resul)
               return {
                   ...state, 
                      fil_Videos : resul
               }
              }
              
              case ORDERING_ACTION:    

            default:
                 return state
   }
}
 
export default rootReducer