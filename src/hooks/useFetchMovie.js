import { useState, useEffect } from "react";
// import { useQuery } from "react-query";

const useFetchMovie = () => {
  const url =
    "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";
  const [movies, setMovies] = useState({ data: [], error: "", loading: true });
  const [series, setSeries] = useState({ data: [], error: "", loading: true });
  // const {data, isLoading} = useQuery("apiData", () => {
  //   fetch(url)
  // })

  const urlCall = () =>
    fetch(url)
      .then((response) => response.json())
      .then(
        (true_data) => (
          setMovies({
            ...movies,
            data: sortData(true_data.entries),
            loading: false,
          }),
          setSeries({
            ...movies,
            data: sortData(true_data.entries),
            loading: false,
          })
        )
      )
      .catch(
        (err) => (
          setMovies({ ...movies, error: err }),
          setSeries({ ...series, error: err })
        )
      );

  useEffect(() => {
    const fetchData = urlCall();
    return fetchData;
  }, [movies, series]);

  return [series, movies];
};

const sortData = (data) => {
  return data.sort((a, b) => a.title > b.title);
};

export default useFetchMovie;
