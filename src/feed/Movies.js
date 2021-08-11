/*
Designed By: Abhishek Vaish
Linkedin: https://www.linkedin.com/in/abhishek-vaish
Tool: VSCode (version: 1.56)
*/

import React from "react";
import "../components/Movies.css";
import Card from "../components/Card";
import "../components/Movies.css";
import useFetchMovie from "../hooks/useFetchMovie";

const MoviesJson = () => {
  const [movies] = useFetchMovie();

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
