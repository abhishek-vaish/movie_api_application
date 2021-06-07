/*
Designed By: Abhishek Vaish
Linkedin: https://www.linkedin.com/in/abhishek-vaish
Tool: VSCode (version: 1.56)
*/

import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../components/Series.css";

const SeriesJson = () => {
  const url =
    "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";
  const [series, setSeries] = useState({
    data: [],
    error: "",
    loading: true,
  });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((true_data) =>
        setSeries({
          ...series,
          data: sortData(true_data.entries),
          loading: false,
        })
      )
      .catch((err) => setSeries({ ...series, error: err }));
  }, []);

  const sortData = (data) => {
    return data.sort((a, b) => a.title > b.title);
  };

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

// const apiCall = () =>
//   fetch(
//     "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
//   )
//     .then((response) => response.json())
//     .then((data) => setSeries(data.entries));
