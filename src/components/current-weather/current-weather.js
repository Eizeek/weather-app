import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
        <p className="city">Baku</p>
        <p className="weather-description">Sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </div>
      <div className="bottom">
<p className="temperature">25°</p>

      </div>
    </div>
  );
};

export default CurrentWeather;