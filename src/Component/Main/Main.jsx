import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Movies from "../Movies/Movies";
import Search from "../Search/Search";

export default function Main(){
    const [movies,setMovies]=useState("panda")
    const [loading,setLoading] = useState(true)


    const searchMovies = (str, type = 'all') => {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=329ffa13&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setMovies(data.Search)
        })
    }

    useEffect(() =>{
        fetch("http://www.omdbapi.com/?apikey=329ffa13&s=panda")
        .then((response) => response.json())
        .then((data) =>{
            setMovies(data.Search);
            setLoading(false)
        })
    },[])
    
        return(
            <div className="container content">
                <Search searchMovies={searchMovies} />
                {loading ? <Loader /> : (<Movies movies={movies} />)  }
            </div>
        )
    }
