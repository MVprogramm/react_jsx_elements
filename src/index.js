import React from 'react';
import ReactDom from "react-dom";

const rootElem = document.querySelector('#root');

const searchElem = (
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Search</button>
    </div>
  </>
);

ReactDom.render(searchElem, rootElem);