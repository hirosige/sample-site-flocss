import React from 'react'
import CodingImg from '../images/hot-topic.jpg'

const HotTopic = () => (
  <section className="p-hot-topic">
    <h2 className="u-hidden">HOT TOPIC</h2>
    <a href="#" className="p-hot-topic u-clearfix">
      <img className="p-hot-topic__image" src={CodingImg} alt="コーディング画面" />
      <div className="p-hot-topic__content">
        <h3 className="p-hot-topic__content__title">実務で使えるHTML/CSS<br />モダンコーディングTIPS</h3>
        <p className="p-hot-topic__content__desc">Webフロントエンドの進化の勢いはとどまるところを
        知りません。新しい要素が増えて大幅に表現力が広がったHTML5/CSS3を活用して...</p>
        <time className="p-hot-topic__content__date c-date" datetime="2015-09-01">2015.09.01 TUE</time>
      </div>
    </a>
  </section>
)

export default HotTopic
