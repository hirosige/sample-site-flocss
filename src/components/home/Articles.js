import React from 'react'
import ArticleImg from '../../images/article.jpg'

const Articles = () => (
  <section className="p-articles">
    <h2 className="u-hidden">ARTICLES</h2>
    <div className="u-clearfix">
      <a href="#" className="p-article-box">
        <h3 className="p-article-box__title">実務で使えるHTML/CSSモダンコーディングTIPS</h3>
        <p className="p-article-box__desc">新しい要素が増えて大幅に表現力が広がったHTML5/CSS3を活用し、
        モダンなコーディングにチャレンジしましょう！</p>
        <time className="p-article-box__date c-date" dateTime="2015-06-17">2015.06.17 WED</time>
        <img className="p-article-box__image" src={ArticleImg} alt="コーディング画面"/>
      </a>
      <a href="#" className="p-article-box">
        <h3 className="p-article-box__title">実務で使えるHTML/CSSモダンコーディングTIPS</h3>
        <p className="p-article-box__desc">新しい要素が増えて大幅に表現力が広がったHTML5/CSS3を活用し、
        モダンなコーディングにチャレンジしましょう！</p>
        <time className="p-article-box__date c-date" dateTime="2015-06-17">2015.06.17 WED</time>
        <img className="p-article-box__image" src={ArticleImg} alt="コーディング画面"/>
      </a>
    </div>
  </section>
)

export default Articles
