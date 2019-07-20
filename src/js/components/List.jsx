// src/js/components/List.jsx
//import React from "react";
import { h, Component } from 'preact';

import { connect } from "preact-redux";
const mapStateToProps = state => {
  return { articles: state.articles };
};
const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;