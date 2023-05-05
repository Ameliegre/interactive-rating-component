import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './card'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  #root {
    width: 352px;
    height: 350px;
    @media (max-width: 375px) {
      width: 328px;
    }
  }

  body {
    margin : 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Overpass', sans-serif;
    background-color:  hsl(216, 12%, 8%);
  }

  h1 {
    font-weight: 400;
    color:white;
    margin-top: 30px;
  }

  p {
    font-size:15px;
    font-weight: 400;
    color:hsl(217, 12%, 63%);
    line-height: 25px;
  }

  a {
    color:hsl(217, 12%, 63%);
    &:hover {
      color:blue;
    }
  }
` 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap" rel="stylesheet"></link>
    <GlobalStyle/>
    <Card/>
  </React.StrictMode>
);


