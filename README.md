# Disney+ Clone

## Project's Scope

* Responsive clone of Disney+ streaming service web page: login page, home page, and movie page
* Data fetched from my-json-server
> [!NOTE]  
> Watchlist state management yet to be build.

## Demo
![disney1](https://github.com/marilia-lins/disney-clone/assets/121808358/7d36de37-f632-46ae-a2a8-2eebcbd08db6)
<br/>
<br/>
![disney2](https://github.com/marilia-lins/disney-clone/assets/121808358/1f926e6b-aed6-41ca-ab1a-0e2f29d18b49)

### Installing and running
```
git clone https://github.com/marilia-lins/disney-clone.git
cd disney-clone
npm install
npm start
```
The project will run at http://localhost:3000

## Dependency Versioning

* Redux Toolkit:
  - @reduxjs/toolkit: ^2.0.1
* React Redux:
  - react-redux: ^9.0.4
* JSON Server:
  - json-server: ^0.17.4
* React & React DOM:
  - react: ^18.2.0
  - react-dom: ^18.2.0
* React Router:
  - react-router-dom: ^6.20.1
* Testing Library:
  - @testing-library/jest-dom: ^5.17.0
  - @testing-library/react: ^13.4.0
  - @testing-library/user-event: ^13.5.0
* React Slick & Slick Carousel:
  - react-slick: ^0.29.0
  - slick-carousel: ^1.8.1
* Styled-Components:
  - styled-components: ^6.1.1
* Other Dependencies:
   - react-scripts: 5.0.1
   - web-vitals: ^2.1.4


## Details & Description

* Carousel on the top of the page built with React Slick
* Containers organized by: series, movies and classics
* Clicking in a card, you are redirected to the page with infos about the media clicked
* All the data: card poster, background image, title image and description, was fetched from [my-json-server](https://my-json-server.typicode.com/marilia-lins/disney-api)

## Technologies

* React.js, Javascript
* Styled-Components
* React Slick
