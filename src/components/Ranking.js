import React from 'react'
import RankingImg from '../images/ranking.jpg'

const Ranking = () => (
  <React.Fragment>
    <h2 className="c-heading">RANKING</h2>
    <ol className="p-ranking">
      <li className="p-ranking__item">
        <a href="#">
          <img src={RankingImg} alt="グラフの画像" className="p-ranking__item__image"/>
          <span className="p-ranking__item__order"></span>
          <p className="p-ranking__item__text">HTML/CSSコーディングと切ってもキレないWebブラウザの
          シェア動向をチェックしよう</p>
        </a>
      </li>
      <li className="p-ranking__item">
        <a href="#">
          <img src={RankingImg} alt="グラフの画像" className="p-ranking__item__image"/>
          <span className="p-ranking__item__order"></span>
          <p className="p-ranking__item__text">HTML/CSSコーディングと切ってもキレないWebブラウザの
          シェア動向をチェックしよう</p>
        </a>
      </li>
      <li className="p-ranking__item">
        <a href="#">
          <img src={RankingImg} alt="グラフの画像" className="p-ranking__item__image"/>
          <span className="p-ranking__item__order"></span>
          <p className="p-ranking__item__text">HTML/CSSコーディングと切ってもキレないWebブラウザの
          シェア動向をチェックしよう</p>
        </a>
      </li>
    </ol>
  </React.Fragment>
)

export default Ranking
