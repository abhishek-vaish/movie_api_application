/*
Designed By: Abhishek Vaish
Linkedin: https://www.linkedin.com/in/abhishek-vaish
Tool: VSCode (version: 1.56)
*/

import React, { useState, useEffect } from "react";
import "../components/Movies.css";
import Card from "../components/Card";
import "../components/Movies.css";

const MoviesJson = () => {
  const url =
    "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";
  const [movies, setMovies] = useState({
    data: [],
    error: "",
    loading: true,
    count: 0,
  });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((true_data) =>
        setMovies({
          ...movies,
          data: sortData(true_data.entries),
          loading: false,
        })
      )
      .catch((err) => setMovies({ ...movies, error: err }));
  }, []);

  const sortData = (data) => {
    return data.sort((a, b) => a.title > b.title);
  };

  return (
    <div className="movies__data">
      {movies.error !== "" ? (
        <p className="error">Opps, something went wrong...</p>
      ) : movies.loading ? (
        <p>Loading...</p>
      ) : (
        movies.data.map((movies_data, index) => {
          if (movies_data.programType === "movie") {
            if (movies_data.releaseYear >= 2010) {
              if (index >= 21 && index < 90) {
                return (
                  <div className="movies__card">
                    <Card
                      title={movies_data.title}
                      img={movies_data.images["Poster Art"].url}
                    />
                  </div>
                );
              }
            }
          }
        })
      )}
    </div>
  );
};

export default MoviesJson;
