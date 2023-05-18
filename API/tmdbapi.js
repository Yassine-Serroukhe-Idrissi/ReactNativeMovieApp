import { api_key } from "./apikey"
//Get Movies List

export function getMovieFromAPI(text,page){

    const url = "https://api.themoviedb.org/3/search/movie?api_key="+api_key+"&language=en-US&query="+text+"&page="+
        page
    return  (
        fetch(url)
            .then(response => response.json())
            .catch((error)=>console.log(error))
    )
}

//Get Movie Image
export function getMovieImage(text){
    const url = "https://image.tmdb.org/t/p/w500"+text
    return(url)
}

//Get Movie Details

export function getMovieDetails(id){
    const url = "https://api.themoviedb.org/3/movie/"+id+"?api_key="+api_key
    return  (
        fetch(url)
        .then(response => response.json())
        .catch((error)=>console.log(error))
    )
}