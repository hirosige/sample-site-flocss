import React from 'react'

const Documents = () => (
  <React.Fragment>
    <h2 className="c-heading">DOCUMENTS</h2>
    <ul className="p-documents">
      <li>
        <h3 className="p-documents__title">HTML5</h3>
        <ul>
          <li><a href="#">追加された要素</a></li>
          <li><a href="#">削除された要素</a></li>
          <li><a href="#">意味が変わった要素</a></li>
          <li><a href="#">HTML5のコンテンツモデル</a></li>
        </ul>
      </li>
      <li>
        <h3 className="p-documents__title">CSS3</h3>
        <ul>
          <li><a href="#">追加されたプロパティ</a></li>
          <li><a href="#">削除されたセレクタ</a></li>
          <li><a href="#">追加された単位</a></li>
        </ul>
      </li>
      <li>
        <h3 className="p-documents__title">Javascript</h3>
        <ul>
          <li><a href="#">Javascriptの言語仕様</a></li>
          <li><a href="#">ECMAScriptとは？</a></li>
          <li><a href="#">jQueryとは？</a></li>
        </ul>
      </li>
      <li>
        <h3 className="p-documents__title">Sass, Less, Stylus</h3>
        <p>準備中</p>
      </li>
      <li>
        <h3 className="p-documents__title">Typescript</h3>
        <p>準備中</p>
      </li>
    </ul>
  </React.Fragment>
)

export default Documents