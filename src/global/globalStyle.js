import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
  font-size: 16px;
  width: 100%;
  background-color: #252527;
}

body {
  font-family: 'Big Shoulders Display', cursive;
  font-size: 1rem;
  font weight: 400;
  line-height: 140%;
  font-weight: normal;
  text-rendering: optimizeLegibility;
  background-color: #252527;
  color: #F4F4F4;
  word-wrap: normal;
  font-kerning: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*:before {
  box-sizing: border-box;
}
*:after {
  box-sizing: border-box;
}

section {
  display: block;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cape {
 font-weight: 300;
 font-size: 4.236rem;
 text-transform: uppercase;
 line-height: 90%;
 letter-spacing: 4.2px;
 @media(max-width: 991px) {
  font-size: 3.218rem;
  line-height: 110%;
}
@media(max-width: 991px) {
  font-size: 3.518rem;
  line-height: 110%;
}
}

.designs {
  font-family: 'Monoton', cursive;
  font-size: 6.854rem;
  line-height: 100%;
  @media (max-width: 991px) {
    font-size: 4.236rem;
  }
  @media (max-width: 480px) {
    font-size: 3.236rem;
  }
}

p {
  font-size: 1.618rem;
  line-height: 135%;
  letter-spacing: 0.5px;
  @media (max-width: 991px) {
    font-size: 1rem
  }
}

h1 {
  font-weight: 900;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 9.8px;
  margin-left: 0.25rem;
  margin-top: 0.5rem;
  color: #71C1AA;
  @media(max-width: 991px) {
    font-size: 1.25rem;
    letter-spacing: 3.8px;
  }
  @media(max-width: 480px) {
    margin-left: 0;
    font-size: 1.6rem;
    line-height: 120%;
  }
}

hr {
  border-top: 3px solid #F4F4F4;
  width: 33rem;
  margin: 1rem 0 0.2rem 0;
  text-align: left;
  @media(max-width: 991px) {
    width: 21rem;
  }
  @media(max-width: 480px) {
    width: 16rem;
  }
}

.bottom {
  margin: 0.2rem 0 1rem 0;
  @media(max-width: 480px) {
    margin: 0.2rem 0 0 0;
  }
}

.soon {
  text-transform: uppercase;
  font-size: 4.236rem;
  letter-spacing: 16px;
  @media(max-width: 991px) {
    font-size: 2.618rem;
    letter-spacing: 10.5px;
  }
  @media(max-width: 480px) {
    font-size: 1.55rem;
    line-height: 170%;
    white-space: nowrap;
  }
}

.route {
  text-transform: uppercase;
  font-size: 2.216rem;
  letter-spacing: 10.7px;
  @media(max-width: 991px) {
    font-size: 1.1rem;
    letter-spacing: 8.5px;
    text-transform: capitalize;
  }
  @media(max-width: 480px) {
    margin: 10px 0 0 0;
    white-space: nowrap;
    font-size: 1rem;
    line-height: 170%;
    letter-spacing: 5.55px;
  }
}

.notFound {
  text-transform: uppercase;
  font-size: 4.236rem;
  letter-spacing: 17.8px;
  line-height: 135%;
  @media(max-width: 991px) {
    font-size: 1.5rem;
    line-height: 180%;
  }
  @media(max-width: 480px) {
    letter-spacing: 8.8px;
    white-space: nowrap;
    line-height: 180%;
  }
}

a {
  font-size: 1.618rem;
  font-weight: 400;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  text-decoration: none;
  text-transform: uppercase;
  color: #F4F4F4;
  margin-right: 1rem;
  letter-spacing: 2px;
  @media(max-width: 991px) {
    margin-top: 1rem;
    font-size: 1.35rem;
    margin-right: 0;
  }
  @media(max-width: 480px) {
    font-size: 1.2rem;
    font-weight: 900;
    letter-spacing: 7px;
    line-height: 120%;
    margin: 20px 0;
  }
}

a:active,
a:hover {
  outline-width: 0;
}

`