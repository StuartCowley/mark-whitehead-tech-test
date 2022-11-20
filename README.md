<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]
[![LastCommit][commit-badge]][commit-url]

<!-- PROJECT LOGO -->
<h3 align="center">React Technical Test</h3>

  <p align="center">
    A small app which brings back images of planets, galaxys and stars from the NASA Api. 
    <br />
    ·
    <a href="https://github.com/MaJaWh/tech-test">Report Bug</a>
    ·
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#Packages and Depandancies">Packages and Dependancies</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>\
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project
A week long mock technical test using the NASA api to bring back images of planets, stars and galaxies. This test was designed to give us a real world idea of what a prospective employer would look for. Simple search functionality has been implemented to bring back an array everythingn contained in the api relating to the keyword entered in the search query. This array is then filtered to show only the images. These images are then rendered in the browser window where CSS has been implemented
to allow for scaling.
If a query entered onto the search bar doesnt match anything in the API, an error message will be displayed on the screen. 

## Screenshots
The first screenshot on the left shows the rendered page when the page width goes below 430px. The second image to the left is in a standard browser window.

<div align="center">
<img src="./src/images/fullsize.png" width="350px"><img src="./src/images/425pxwidth.png" width="350px">
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing Utilities Used
The main testing Utility used was Jest which was installed with the project when it was initialized with create-react-app. The React Testing Library was also used.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

- [![React.js][react.js]][react-url]
- [![Java-script][javascript-shield]][javascript-url]
- [![Node.js][node-shield]][node-url]
- [![CSS][CSS]][CSS-url]
- [![HTML][HTML]][HTML-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Packages
1. Axios.
2. PropTypes.
3. Babel-Jest

## Getting Started
Please follow the instructions below to get the best out of the app. 
### Installation

1. Clone the repo into your chosen file
   ```sh
   git clone https://github.com/MaJaWh/tech-test
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Testing   
- Testing
   ```sh
   npm test
   ```

###  Running the Development Server  
- npm
   ```sh
   npm start
   ```    
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usuage Examples
The below example shows how the images are displayed when 'moon' is entered as a search query.

<div align="center">
<img src="./src/images/Screenshot 2022-11-20 at 19.26.05.png" width="400px">
</div>

## Further Work
Looking to the future there are a nuumber of upgrades i would like to implement if i have the chance to revisit the project.
1. The ability so paginate the responses brought back from the API coupled with some type of filter accessed using a pre filled drop down menu with the available filter types.
2. The ability to click on each image and reveal information about that specific image. This could be coupled with some type of animation that makes all the images on the screen disapear to be replaced with a body of text.
3. The abaility of the images to scale when the text size is increased. At the moment the images only scale when the browser window is adjusted.
4.A button that changes the 'view'. Just images, images with text, one large image, etc.

## Contact

Your Name - [@twitter_handle](https://twitter.com/@mjamesw2010)

Project Link: [https://github.com/MaJaWh/tech-test](https://github.com/MaJaWh/tech-test)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->

[commit-badge]: https://img.shields.io/github/last-commit/MaJAWh/music-library
[commit-url]: https://github.com/MaJaWh/music-library

[javascript-url]: https://www.javascript.com/
[javascript-shield]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black

[CSS]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://www.w3.org/Style/CSS/Overview.en.html

[HTML]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://html.com/

[node-shield]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/en/

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mjamesw/

[product-screenshot]: images/screenshot.png

[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
