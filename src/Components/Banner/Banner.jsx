/// ##################################
import React, { useEffect, useState } from "react";
import axios from "../../Utils/axios";
import requests from "../../Utils/requests";
import Styles from "./banner.module.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        // console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);
  //   function truncate(str, n) {
  //     return str?.length > n ? substr(0, n - 1) + "...." : str;
  //   }

  return (
    <div
      className={Styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={Styles.banner_contents}>
        <h1 className={Styles.banner_title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={Styles.banner_buttons}>
          <button className={`${Styles.banner_button} ${Styles.play}`}>
            Play
          </button>
          <button className={Styles.banner_button}>My Lists</button>
        </div>
        <h1 className={Styles.banner_description}>
          {movie?.overview?.slice(0, 150)}...
        </h1>
      </div>
      <div className={Styles.banner_fadeBottom}></div>
    </div>
  );
};

export default Banner;
