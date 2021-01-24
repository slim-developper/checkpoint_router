import React, { useState } from "react";
import "./App.css";
import { moviesData } from "./components/MoviesData";
import MovieList from "./components/MovieList/MovieList";
import AddMovie from "./components/AddMovie/AddMovie";
import Filter from "./components/Filter/Filter";
import Trailer from "./components/Trailer/Trailer"
import {BrowserRouter as Router,Route} from 'react-router-dom'



function Page() {
  const [movies, setMovies] = useState(moviesData);
  const [titleSearch, setTitleSearch] = useState("");
  const [rateSearch, setRateSearch] = useState(0);
  const handleAdd = (newMovie) => {
    if (
      newMovie.title!=="" &&
      newMovie.description!=="" &&
      newMovie.date!=="" &&
      newMovie.posterUrl!==""&&
      newMovie.rate!==0
    ) {
      setMovies([...movies, newMovie]);
    }else{
      alert('All fields are mandatory!')
    }
   
  };
  return (
    <div>
      

      
      



      <div style={{ display: "flex", justifyContent: "space-around", width: "100%" , background:'black'}}>
      <AddMovie handleAdd={handleAdd} />
        <Filter
          rate={rateSearch}
          setRateSearch={setRateSearch}
          setTitleSearch={setTitleSearch}
        />
      </div>
      <h1 id='appTitle'>Checkpoint React hooks</h1>
      <MovieList
        rateSearch={rateSearch}
        titleSearch={titleSearch}
        movies={movies}
      />
      
    </div>
  );
}

export default Page;