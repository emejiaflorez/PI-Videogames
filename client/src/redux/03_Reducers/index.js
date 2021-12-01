import { GET_ALL_VIDEOS,  GET_VIDEOS_BY_NAME, GET_VIDEO_DETAIL, ADD_VIDEOGAMES,
         GET_ALL_GENRES,  GET_ALL_PLATFORMS,  FILTER_BY_GENRE,  FILTER_BY_VIDEO, 
         ORDERING_ACTION, PAGING_ACTION } from '../01_Action_Types/index';

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

   //    case 'FILTER_BY_CONTINENT':
   //     const filteredByCntnt =
   //       action.payload === 'All'
   //         ? state.allCountries
   //         : state.allCountries.filter((c) => c.continent === action.payload)
   //     return {
   //       ...state,
   //       countries: filteredByCntnt,
   //     }
     
   //     case 'FILTER_BY_ACTIVITY':
   //     const filtered =
   //       action.payload === 'All'
   //         ? state.allCountries
   //         : state.allCountries.filter(
   //             (c) =>
   //               c.activities &&
   //               c.activities.filter((act) => act.season === action.payload)
   //                 .length
   //           )
   //     return {
   //       ...state,
   //       countries: filtered,
   //     }
     
   //     case 'FILTER_BY_ACTIVITY_NAME':
   //     const filteredByName =
   //       action.payload === 'All'
   //         ? state.allCountries
   //         : state.allCountries.filter(
   //             (c) =>
   //               c.activities &&
   //               c.activities.filter((act) => act.name === action.payload).length
   //           )
   //     return {
   //       ...state,
   //       countries: filteredByName,
   //     }
     
   //     case 'SORT':
   //     var sorted
   //     if (action.payload.length === 2) {
   //       sorted =
   //         action.payload === 'AZ'
   //           ? state.countries.sort((a, b) => {
   //               if (a.name > b.name) return 1
   //               if (a.name < b.name) return -1
   //               return 0
   //             })
   //           : state.countries.sort((a, b) => {
   //               if (a.name > b.name) return -1
   //               if (a.name < b.name) return 1
   //               return 0
   //             })
   //     } else {
   //       sorted =
   //         action.payload === 'populationAsc'
   //           ? state.countries.sort((a, b) => a.population - b.population)
   //           : state.countries.sort((a, b) => b.population - a.population)
   //     }
   //     return {
   //       ...state,
   //       countries: sorted,
   //     }
     
   //     case 'CREATE_ACTIVITY':
   //     return {
   //       ...state,
   //     }
     
   
     
       default:
       return state
    }
}
 
 export default rootReducer