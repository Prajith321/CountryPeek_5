import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'

function CountryCard({ country }) {
  const {
    cca3,
    flags,
    name,
    population,
    region,
    capital,
  } = country

  const { favourites, dispatch } = useFavourites()

  const isSaved = favourites.some(
    (fav) => fav.cca3 === cca3
  )

  const handleFavourite = (e) => {
    e.stopPropagation()

    if (isSaved) {
      dispatch({
        type: 'REMOVE_FAVOURITE',
        payload: cca3,
      })
    } else {
      dispatch({
        type: 'ADD_FAVOURITE',
        payload: country,
      })
    }
  }

  return (
    <Link to={`/country/${cca3}`} className="card">
      <img
        src={flags?.png}
        alt={name?.common}
        className="card__flag"
      />

      <div className="card__body">
        <h2>{name?.common}</h2>

        <p>
          <strong>Population:</strong> {population?.toLocaleString()}
        </p>

        <p>
          <strong>Region:</strong> {region}
        </p>

        <p>
          <strong>Capital:</strong> {capital?.[0]}
        </p>

        <button
          className={`fav-btn ${
            isSaved ? 'fav-btn--saved' : ''
          }`}
          onClick={handleFavourite}
        >
          {isSaved ? '♥ Saved' : '♡ Save'}
        </button>
      </div>
    </Link>
  )
}

export default CountryCard
