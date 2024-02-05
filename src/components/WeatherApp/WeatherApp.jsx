import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";
const WeatherApp = () => {
  let api_key = "9f4f41915c532c97738e9c7b3f89d502";

  const search = () => {};
  return (
    <div className="weather-container space-y-7">
      <div className="top-bar flex justify-center items-center gap-5 pt-10">
        <input
          type="text"
          autoFocus
          className="rounded-full px-4 py-3 focus:outline-none bg-gray-100"
          placeholder="Search"
        />
        <div
          onClick={() => {
            search();
          }}
          className="search-icon cursor-pointer rounded-full text-white"
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image flex justify-center">
        <img className="w-20 h-auto" src={cloud_icon} alt="" />
      </div>
      <div className="weather-tem text-center text-6xl text-white font-[400]">
        24°c
      </div>
      <div className="weather-location text-center font-[400] text-3xl text-white">
        London
      </div>
      <div className="data-container flex justify-center text-white items-center">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <p className="humidity-percent">64%</p>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
