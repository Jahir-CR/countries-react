import { useEffect, useState } from "react";
import api from "../API/Countries";
import "./styles.css";

const CountryInfo = () => {
  const [countries, setCountry] = useState({name: "", capital: "", image: ""}); 
  const getStoredUser = JSON.parse(localStorage.getItem('user'));
  
  
  const GetCountry = async () => {
    const countryName = document.querySelector(".country").value;
    console.log(getStoredUser);
    const countriesNames = await api
      .get(`/${countryName}`)
      .then((res) => {
        const country = res.data[0].name.common;
        const imageURL = res.data[0].flags.png;
        const capitalName = res.data[0].capital[0];
        setCountry({...countries, name:country, capital:capitalName, image:imageURL});   
      })
      .catch((err) => console.log(err));
  };

  console.log(countries);
//   console.log(countries.capital);
//   console.log(countries.image);

  return (
    <>
      <div className="home">
        <input
          className="country"
          type="text"
          placeholder="Enter country name"
        ></input>
        <button className="button" onClick={GetCountry}>
          Click
        </button>
        <div className="home-container">
          <ul>
            {
              <li>
                <div>
                  <p className="username">Usuario: {getStoredUser.username}</p>
                  <img className = "country_img" src={countries.image}></img>
                  <p className="pais">País: {countries.name}</p>
                  <p className = "capital">Capital: {countries.capital}</p>
                </div>
              </li>
            }
          </ul>
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
