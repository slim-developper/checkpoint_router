import React, { useState } from "react";
import "./App.css";
import { moviesData } from "./components/MoviesData";
import MovieList from "./components/MovieList/MovieList";
import AddMovie from "./components/AddMovie/AddMovie";
import Filter from "./components/Filter/Filter";
import Trailer from "./components/Trailer/Trailer"
import Ta from "./components/Trailer/Ta"
import Tb from "./components/Trailer/Tb"
import Tc from "./components/Trailer/Tc"
import Td from "./components/Trailer/Td"

import {BrowserRouter as Router,Route} from 'react-router-dom'



function App() {
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
      
      <Router>
     
      
      



      <div style={{ display: "flex", justifyContent: "space-around", width: "100%" , background:'black'}}>
      <AddMovie handleAdd={handleAdd} />
        <Filter
          rate={rateSearch}
          setRateSearch={setRateSearch}
          setTitleSearch={setTitleSearch}
        />




      </div>
      <h1 id='appTitle'>Checkpoint React hooks</h1>

      <Trailer/>
     
     <Route path="" />
      <Route path="/Ta" exact component={Ta}/>
      <Route path="/Tb" exact component={Tb}/>
      <Route path="/Tc" exact component={Tc}/>
      <Route path="/Td" exact component={Td}/>

      <MovieList
        rateSearch={rateSearch}
        titleSearch={titleSearch}
        movies={movies}
      />
      </Router>
    </div>
  );
}

export default App;
