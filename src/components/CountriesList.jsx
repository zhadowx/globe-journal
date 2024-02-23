import { useCities } from "../contexts/CitiesContext.jsx";

import styles from "./CountriesList.module.css";
import CountryItem from "./CountryItem.jsx";
import Message from "./Message.jsx";
import Spinner from "./Spinner.jsx";

export default function CountriesList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}
