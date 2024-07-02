import { useEffect, useState, useCallback } from "react";
import getFormattedWeatherData from "./ApiService/WeatherService.js";
import Forecast from "./components/Forecast.jsx";
import Inputs from "./components/Inputs.jsx";
import TempDetails from "./components/TempDetails.jsx";
import TimeAndLocation from "./components/TimeAndLocation.jsx";
import TopButtons from "./components/TopButtons.jsx";

const App = () => {

  const [query, setQuery] = useState({ q: 'Ghaziabad' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  // const getWeather = async () => {
  //   await getFormattedWeatherData({ ...query, units }).then(data => {
  //     setWeather(data);
  //   })
  //   // console.log(data);
  // };

  // useEffect(() => {
  //   getWeather();
  // }, [query, units])

  const getWeather = useCallback(async () => {
    await getFormattedWeatherData({ ...query, units }).then(data => {
      setWeather(data);
    });
    // console.log(data);
  }, [query, units]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);


  return (
    <div >
    <div className="mx-auto max-w-screen-lg mt-4 py-4 px-32 bg-gradient-to-bl shadow-xl shadow-gray-400 from-cyan-500 to-blue-800">
      <TopButtons setQuery= {setQuery} />
      <Inputs setQuery= { setQuery } setUnits={ setUnits } />
      { weather && (
        <>
        <TimeAndLocation weather={weather} />
        <TempDetails weather={weather} units={ units } />
        <Forecast title="3 Hour step Forecast " data= {weather.hourly}/>
        <Forecast title="Daily Forecast " data= {weather.daily} />
        </>
        )}         
      </div>
    </div>
  );
}

export default App;
