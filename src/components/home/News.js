import React from 'react'

const News = () => (
  <section>
    <h2 className="c-heading">NEWS</h2>
    <ul className="p-scroll-list">
      <li className="p-scroll-list__item">
        <a href="#">
          <time className="p-scroll_list__item__date" dateTime="2015-08-23">2015.08.23 SUN</time>
          <span className="p-scroll_list__item__category is-news">NEWS</span>
          <span className="p-scroll_list__item__title">WORKSを更新しました。</span>
        </a>
      </li>
      <li className="p-scroll-list__item">
        <a href="#">
          <time className="p-scroll_list__item__date" dateTime="2015-08-12">2015.08.12 WED</time>
          <span className="p-scroll_list__item__category">TOPICS</span>
          <span className="p-scroll_list__item__title">CSSでここまで出来る！？ホントに使えるCSSセレクタ10選！</span>
        </a>
      </li>
    </ul>

  </section>
)

export default News
