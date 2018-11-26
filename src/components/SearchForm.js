import React from 'react'

const SearchForm = () => (
  <React.Fragment>
    <h2 className="u-hidden">SEARCH</h2>
    <form className="p-search-box">
      <input type="text" className="p-search-box__input" placeholder="SEARCH"/>
      <input type="submit" className="p-search-box__button c-button is-pink" value="検索"/>
      <p className="p-search-box__text">サイト内の文章を検索出来ます</p>
    </form>
  </React.Fragment>
)

export default SearchForm