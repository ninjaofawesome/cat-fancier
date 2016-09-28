const React = require('react');
const data = require('../data')
import './CatsList.css';

const CatsList = () => (
  <div className="CatsList-container">
  {data.cats.map((cat) => (
    <div className="CatsList-card">
      <img src={cat.photo} className="CatsList-thumbnail" alt="cat" />
      <h2 className="CatsList-name">{cat.name}</h2>
      <ul className="CatsList-details">
        <li className="CatsList-details__item">
          <span className="CatsList-details__item-indicator">Breed:
          </span> {cat.breed}
        </li>
        <li className="CatsList-details__item">
          <span className="CatsList-details__item-indicator">I Like:
          </span> {cat.likes}
        </li>
        <li className="CatsList-details__item">
          <span className="CatsList-details__item-indicator">I Dislike:
          </span> {cat.dislikes}
        </li>
      </ul>
    </div>
  ))}
  </div>
)

module.exports = CatsList