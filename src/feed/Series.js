/*
Designed By: Abhishek Vaish
Linkedin: https://www.linkedin.com/in/abhishek-vaish
Tool: VSCode (version: 1.56)
*/

import React from "react";
import Card from "../components/Card";
import "../components/Series.css";
import useFetchMovie from "../hooks/useFetchMovie";

const SeriesJson = () => {
  const [series] = useFetchMovie();

  return (
    <div className="series__data">
      {series.error !== "" ? (
        <p className="error">Opps, something went wrong...</p>
      ) : series.loading ? (
        <p>Loading...</p>
      ) : (
        series.data.map((series_data, index) => {
          if (series_data.programType === "series") {
            if (series_data.releaseYear >= 2010) {
              if (index <= 45) {
                return (
                  <div className="series__card">
                    <Card
                      title={series_data.title}
                      img={series_data.images["Poster Art"].url}
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

export default SeriesJson;
