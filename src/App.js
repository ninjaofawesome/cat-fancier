const React = require('react');
const CatsList = require('./CatsList')
import './App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <h1 className="App-title">Cat Fancier List</h1>
      <h2 className="App-subtitle">For Those Who Fancy Fancy Cats.</h2>
    </div>
    <p className="App-intro">
      If you like looking at fancy cats, then this cat fancy list is the list for you.  Here are some of our favorite cats.
    </p>

    <CatsList />
  </div>
)

module.exports = App


