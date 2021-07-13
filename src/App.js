import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Spinner from "./dates/spinner";
import {
  FillDate,
  SetDate1,
  SetDate2,
  SetDate3,
  SetDate4,
  SetDate5,
} from "./dates/getDates";
import {
  setLocation,
  setPresentTemp,
  setMausam,
  setClassName,
  setDay1,
  setDay2,
  setDay3,
  setDay4,
  setDay5,
  setClassImg1,
  setClassImg2,
  setClassImg3,
  setClassImg4,
  setClassImg5,
} from "./dates/setDay";

function App() {
  const [Queries, setQueries] = useState("");
  const [weather, setWeather] = useState({});
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (q) => {
    try {
      setError("");
      setQueries("");
      setLoader(true);
      if (q.length === 0) {
        setError("Please Enter City Name!");
        setLoader(false);
        return;
      }
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=b539f504ed29ff36eb0a092685f95d6f`
      );
      setWeather(data);
      setLoader(false);
    } catch (ex) {
      setLoader(false);
      setError("Data Not Present!");
    }
  };

  const setInputText = (e) => {
    setError("");
    setQueries(e.target.value);
  };

  return (
    <div className={setClassName(weather)}>
      <div className="navbar__head">
        <span className="navText">Weather ForeCast</span>
      </div>
      <div className="navbar__error">{error}</div>
      <div className="searchBar__wrapper">
        <input
          type="text"
          className="search-bar"
          placeholder="Enter city name"
          value={Queries}
          size="20"
          onChange={setInputText}
        />
        <button
          type="button"
          onClick={() => fetchData(Queries)}
          className="btn btn-primary mb-2"
        >
          Search
        </button>
      </div>
      {weather.city !== undefined ? (
        <div>
          <div className="location-box">
            <div className="location">{setLocation(weather)}</div>
            <div className="date">{FillDate()}</div>
            <div className="temp">{setPresentTemp(weather)}&#176;c</div>
            <div className="weather">{setMausam(weather)}</div>
          </div>
          <div className="next__days">
            <div className="next__days__data">
              <div className="nxttemp">{setDay1(weather)}&#176;c</div>
              <div className={setClassImg1(weather)} />
              <div className="nxtdate">{SetDate1()}</div>
            </div>
            <div className="next__days__data">
              <div className="nxttemp">{setDay2(weather)}&#176;c</div>
              <div className={setClassImg2(weather)} />
              <div className="nxtdate">{SetDate2()}</div>
            </div>
            <div className="next__days__data">
              <div className="nxttemp">{setDay3(weather)}&#176;c</div>
              <div className={setClassImg3(weather)} />
              <div className="nxtdate">{SetDate3()}</div>
            </div>
            <div className="next__days__data">
              <div className="nxttemp">{setDay4(weather)}&#176;c</div>
              <div className={setClassImg4(weather)} />
              <div className="nxtdate">{SetDate4()}</div>
            </div>
            <div className="next__days__data">
              <div className="nxttemp">{setDay5(weather)}&#176;c</div>
              <div className={setClassImg5(weather)} />
              <div className="nxtdate">{SetDate5()}</div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {loader === true ? <Spinner /> : null}
    </div>
  );
}

export default App;

// https://vikram222726.github.io/weather-app/
