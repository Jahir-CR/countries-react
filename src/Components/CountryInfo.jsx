import { useEffect, useState } from "react";
import api from "../API/Countries";
import "./styles.css";

const CountryInfo = () => {
  const [countries, setCountry] = useState("");
  const [countryCapital, setCountryCapital] = useState("");
  const [countryImage, setCountryImage] = useState("");
  let count = 0;

  const GetCountry = async () => {
    const countryName = document.querySelector(".country").value;
    const countriesNames = await api
      .get(`/${countryName}`)
      .then((res) => {
        //obtener el nombre del pais
        const country = res.data[0].name.common;
        setCountry(country);

        //obtener la capital del pais
        const capital = res.data[0].capital[0];
        setCountryCapital(capital);

        //obtener la bandera del pais
        const image = res.data[0].flags.png;
        setCountryImage(image);
      })
      .catch((err) => console.log(err));
  };

  console.log(countries);
  console.log(countryCapital);
  console.log(countryImage);

  return (
    <>
      <div className="home">
        <input
          className="country"
          type="text"
          placeholder="Enter country name"
        ></input>
        <button className="button" onClick={GetCountry}>
          {" "}
          Click{" "}
        </button>
        <div className="home-container">
          <ul>
            {countries.length > 0 && (
              <li key = {count++}>
                <div>
                  <p>País: {countries}</p>
                  <p>Capital: {countryCapital}</p>
                  <img className="country_img" src={countryImage}></img>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
